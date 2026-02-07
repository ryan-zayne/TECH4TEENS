import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentProps<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex grow flex-col", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export { Main };
