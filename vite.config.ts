import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyCarWars() {
	return {
		name: "copy-car-wars",
		writeBundle: async () => {
			const src = path.join(__dirname, "public/car-wars");
			const dest = path.join(__dirname, "dist/car-wars");
			try {
				await fs.cp(src, dest, { recursive: true });
				console.log("Copied public/car-wars to dist/car-wars");
			} catch (e) {
				console.warn("Could not copy public/car-wars to dist/car-wars:", e);
			}
		},
	};
}

function copyIndexTo404() {
	return {
		name: "copy-index-to-404",
		writeBundle: async () => {
			const src = path.join(__dirname, "dist/index.html");
			const dest = path.join(__dirname, "dist/404.html");
			try {
				await fs.copyFile(src, dest);
				console.log("Copied dist/index.html to dist/404.html");
			} catch (e) {
				console.warn("Could not copy index.html to 404.html:", e);
			}
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: "::",
		port: 8080,
		hmr: {
			overlay: false,
		},
	},
	plugins: [tailwindcss(), react(), copyIndexTo404(), copyCarWars()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
