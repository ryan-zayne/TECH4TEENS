import type { MoniconConfig } from "@monicon/core";
import { iconsArray } from "./monicon-config/iconsArray.ts";
import { iconsGenPlugin } from "./monicon-config/iconsGenPlugin.ts";

export default {
	icons: iconsArray,
	plugins: [iconsGenPlugin({ outputPath: ".monicon" })],
} satisfies MoniconConfig;
