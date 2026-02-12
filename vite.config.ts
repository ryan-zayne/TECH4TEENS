import { setupPlugins } from "@responsive-image/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		viteTsconfigPaths(),
		react(),
		tailwindcss(),
		setupPlugins({
			format: ["avif"],
			include: /^[^?]+\.(png|jpg)\?.*responsive.*$/,
			lqip: { type: "color" },
		}),
	],
});
