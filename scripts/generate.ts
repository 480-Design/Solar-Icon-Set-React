import { existsSync } from "node:fs"
import { appendFile, open, readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import { log, progress, spinner } from "@clack/prompts"
import { createFfetch, ffetchAddons } from "@fuman/fetch"
import { transform } from "@svgr/core"
import { Api as FigmaApi } from "figma-api"

import { getCacheFile } from "./_utils/cache.ts"
import env from "./_utils/env.ts"

const outDir = resolve(import.meta.dirname, "../src/icons")

const api = new FigmaApi({
    personalAccessToken: env.token,
})

const download = createFfetch({
    addons: [ffetchAddons.retry()],
    retry: {},
})

async function getComponents() {
    const cachePath = await getCacheFile("components.json")
    if (existsSync(cachePath)) {
        log.info("Using cached components")
        return JSON.parse(await readFile(cachePath, `utf8`))
    }

    const s = spinner()
    s.start("Fetching components")
    const { components } = await api.getFile(env.fileId, { ids: [`0:1`] })
    s.stop("Components fetched")

    await writeFile(cachePath, JSON.stringify(components))
    return components
}

async function getImageLinks(ids: string[]) {
    const cachePath = await getCacheFile("urls.json")
    if (existsSync(cachePath)) {
        log.info("Using cached links")
        return JSON.parse(await readFile(cachePath, `utf8`))
    }

    const p = progress({ max: ids.length })
    p.start("Getting images")
    const chunkSize = 580
    const urls: Record<string, string> = {}
    for (let i = 0; i < ids.length; i += chunkSize) {
        p.advance(chunkSize, `Getting images (${i} - ${i + chunkSize})`)
        Object.assign(
            urls,
            (
                await api.getImage(env.fileId, {
                    ids: ids.slice(i, i + chunkSize).join(`,`),
                    format: `svg`,
                    scale: 1,
                })
            ).images,
        )
    }
    p.stop("Images retrieved")
    await writeFile(cachePath, JSON.stringify(urls))
    return urls
}

type DownloadedImage = {
    id: string,
    data: string,
}
async function downloadImages(urls: Record<string, string>) {
    const urlEntries = Object.entries(urls)
    const p = progress({ max: urlEntries.length })
    p.start("Downloading images")
    const svgs: Array<DownloadedImage> = await Promise.all(
        urlEntries.map(async ([id, url]) => {
            const cacheFile = await getCacheFile(`${id.replace(":", "_")}.svg`)
            if (existsSync(cacheFile)) {
                const data = await readFile(cacheFile, `utf8`)
                p.advance(1, `Downloading images (${id} cached)`)
                return {
                    id,
                    data,
                }
            }
            const data = await download.get(url).text()
            p.advance(1, `Downloading images (${id} fetched)`)
            await writeFile(cacheFile, data)
            return {
                id,
                data,
            }
        }),
    )
    p.stop("Images downloaded")
    return svgs
}

async function convertImages(svgs: Array<DownloadedImage>, nameProvider: (id: string) => string) {
    const icons: Record<string, string> = {}

    const p = progress({ max: svgs.length })
    p.start("Converting images")
    await Promise.all(
        svgs.map(async (svg) => {
            const [style, _category, name]: Array<string> = nameProvider(svg.id)
                .split(` / `)
                .map(text =>
                    text
                        .replace(/[-_]+/g, "")
                        .replace(/[^\w\s]/g, "")
                        .replace(
                            /\s+(.)(\w*)/g,
                            (_, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
                        )
                        .replace(/\w/, s => s.toUpperCase())
                        .replace(/ /g, "")
                        .replace(/4K/g, `FourK`),
                )
            const fullName = `${name}${style}`
            icons[fullName] = (
                await transform(svg.data, {
                    typescript: true,
                    jsxRuntime: "automatic",
                    dimensions: false,
                    replaceAttrValues: {
                        "#1C274C": "currentColor",
                    },
                    plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
                    template: ({ jsx }, { tpl }) => tpl`${jsx}`,
                }, { componentName: fullName })
            ).slice(0, -1)
            p.advance(1, `Converting images (${svg.id})`)
        }),
    )
    p.stop("Images converted")
    return icons
}

async function writeIcons(icons: Record<string, string>) {
    const p = progress({ max: Object.keys(icons).length })
    p.start("Saving icons")
    const barrel = await open(resolve(outDir, "index.ts"), "w")
    await Promise.all(Object.entries(icons).map(async ([name, svg]) => {
        await writeFile(
            resolve(outDir, `${name}.tsx`),
            `\
import { SolarIconProps } from "@/types.ts"

export default function ${name}({ color = "currentColor", size = 16, style = {}, ...rest }: SolarIconProps) {
    const props = { ...rest, width: size, height: size, style: { color, display: "inline-block", ...style } }
    return ${svg}
}
`,
        )
        await appendFile(barrel, `export { default as ${name} } from "./${name}.tsx"\n`)
        p.advance(1, `Saving icons (${name}.tsx)`)
    }))
    p.stop("Icons saved")
}

const main = async () => {
    const components = await getComponents()
    const urls = await getImageLinks(Object.keys(components))
    const svgs = await downloadImages(urls)
    const icons = await convertImages(svgs, id => components[id].name)
    await writeIcons(icons)
}

void main()
