import { monicon } from "@monicon/vite";
import { setupPlugins } from "@responsive-image/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { iconsArray } from "./monicon-config/iconsArray";
import { iconsGenPlugin } from "./monicon-config/iconsGenPlugin";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		setupPlugins({
			format: ["avif"],
			include: /^[^?]+\.(png|jpg)\?.*responsive.*$/,
			lqip: { type: "thumbhash" },
			w: [360, 1000],
		}),
		monicon({
			icons: iconsArray,
			plugins: [iconsGenPlugin({ outputPath: ".monicon" })],
		}),
	],
	resolve: {
		tsconfigPaths: true,
	},
});
