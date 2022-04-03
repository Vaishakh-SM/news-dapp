import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { viteExternalsPlugin } from "vite-plugin-externals"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// viteExternalsPlugin({
		// 	electron: "electron",
		// 	"electron-fetch": "electron-fetch",
		// }),
	],
	optimizeDeps: {
		// exclude: ["ipfs-http-client", "electron-fetch"],
	},
	define: {
		"process.env.NODE_ENV": "\"process.env.NODE_ENV\"",
	},
})
