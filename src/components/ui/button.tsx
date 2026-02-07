"use client";

import type { InferProps, PolymorphicProps } from "@zayne-labs/toolkit-react/utils";
import type { Prettify } from "@zayne-labs/toolkit-type-helpers";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@/components/common/slot";
import { cnJoin } from "@/lib/utils/cn";

export type ButtonProps = InferProps<"button">
	& Prettify<
		VariantProps<typeof buttonVariants> & {
			asChild?: boolean;
			isLoading?: boolean;
			loadingStyle?: "replace-content" | "side-by-side";
			unstyled?: boolean;
		}
	>;

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = tv({
	base: "flex items-center justify-center rounded-[8px]",

	defaultVariants: {
		size: "medium",
		theme: "primary",
	},

	variants: {
		disabled: {
			true: "cursor-not-allowed opacity-60",
		},

		isDisabled: {
			true: "cursor-not-allowed",
		},

		isLoading: {
			true: "grid content-center",
		},

		size: {
			"full-width": "h-10 w-full text-[12px] md:h-[56px] md:text-[20px]",

			large: "h-9 w-full max-w-[140px] text-[12px] md:h-[56px] md:max-w-[250px] md:text-[20px]",

			medium: "h-8 px-4 py-2 text-[12px] md:h-10 md:px-6 md:text-base",
		},

		theme: {
			primary: "bg-tech4teens-primary text-tech4teens-bg-color",

			"primary-inverse": "border border-tech4teens-primary bg-transparent text-tech4teens-primary",
		},
	},
});

function Button<TElement extends React.ElementType>(props: PolymorphicProps<TElement, ButtonProps>) {
	const {
		as: Element = "button",
		asChild,
		children,
		className,
		isDisabled = false,
		disabled = isDisabled,
		isLoading = false,
		loadingStyle = "replace-content",
		size,
		theme,
		type = "button",
		unstyled,
		...restOfButtonProps
	} = props;

	const Component = asChild ? Slot.Root : Element;

	const BTN_CLASSES =
		!unstyled ?
			buttonVariants({
				className,
				disabled,
				isDisabled,
				isLoading,
				size,
				theme,
			})
		:	className;

	const withIcon = (
		<>
			<Slot.Slottable>
				{loadingStyle === "replace-content" ?
					<div className="invisible [grid-area:1/1]">{children}</div>
				:	children}
			</Slot.Slottable>

			<span
				className={cnJoin(
					"flex justify-center",
					loadingStyle === "replace-content" && "[grid-area:1/1]"
				)}
			>
				{/* <WhiteSpinnerIcon /> */}
			</span>
		</>
	);

	// == This technique helps prevents content shift when replacing children with spinner icon
	return (
		<Component
			type={type}
			className={BTN_CLASSES}
			disabled={disabled || isDisabled}
			{...restOfButtonProps}
		>
			{isLoading ? withIcon : children}
		</Component>
	);
}

export { Button };
