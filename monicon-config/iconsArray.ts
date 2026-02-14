import { defineEnum } from "@zayne-labs/toolkit-type-helpers";

const iconsArray = defineEnum(
	[
		"radix-icons:chevron-right",
		"radix-icons:check",
		"radix-icons:dot-filled",
		"tabler:currency-naira",
		"basil:cancel-outline",
		"mi:menu",
		"uil:check",
		"mingcute:time-line",
		"iconamoon:arrow-down-2",
	],
	{ inferredUnionVariant: "values" }
);

export { iconsArray };
