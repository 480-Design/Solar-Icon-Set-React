import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [react(), dts({ tsconfigPath: "./tsconfig.app.json", aliasesExclude: ["@"] })],
    build: {
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
        },
        lib: {
            name: "solar-icon-set",
            entry: "src/index.ts",
            fileName: "index",
            formats: ["es"],
        },
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
})
