import { readdir, rm } from "node:fs/promises"
import { resolve } from "node:path"

import { progress, spinner } from "@clack/prompts"
import { clearCache } from "./_utils/cache.ts"

const outDir = resolve(import.meta.dirname, "../src/icons")

async function cleanOutDir() {
    const dir = await readdir(outDir)
    const p = progress({ max: dir.length })
    p.start("Removing icons")
    for (const file of dir) {
        if (file === ".gitkeep")
            continue
        await rm(resolve(outDir, file))
        p.advance(1, `Removing ${file}`)
    }
    p.stop("Icons removed")
}

async function cleanCaches() {
    const s = spinner()
    s.start("Removing cache")
    await clearCache()
    s.stop("Cache removed")
}

async function main() {
    await cleanCaches()
    await cleanOutDir()
}

void main()
