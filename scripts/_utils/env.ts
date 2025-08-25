import { env, exit } from "node:process"
import { log } from "@clack/prompts"

import "dotenv/config"

const { FIGMA_TOKEN: token, FIGMA_FILE_ID: fileId } = env

if (!token || !fileId) {
    log.error("Environment variables not set. Please check .env.example for reference.")
    exit(1)
}

export default { fileId, token }
