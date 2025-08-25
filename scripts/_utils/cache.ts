import { existsSync } from "node:fs"
import { mkdir, rm } from "node:fs/promises"
import { resolve } from "node:path"

const cacheDir = resolve(import.meta.dirname, "../../.solar")
async function getCacheDir() {
    if (!existsSync(cacheDir))
        await mkdir(cacheDir)
    return cacheDir
}

export async function getCacheFile(...paths: string[]) {
    return resolve(await getCacheDir(), ...paths)
}

export async function clearCache() {
    if (existsSync(cacheDir))
        await rm(cacheDir, { recursive: true })
}
