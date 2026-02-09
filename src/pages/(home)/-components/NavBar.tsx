import { useToggle } from "@zayne-labs/toolkit-react";
import { IconBox } from "@/components/common";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cnMerge } from "@/lib/utils/cn";

function NavBar() {
	return (
		<header className="absolute z-500 flex w-full items-center justify-between px-6 pt-5">
			<Logo className="h-7.5 w-[74px]" />

			<MobileNavigation className="lg:hidden" />
		</header>
	);
}

export { NavBar };

function MobileNavigation(props: { className?: string }) {
	const { className } = props;

	const [isNavShow, toggleNavShow] = useToggle(false);

	return (
		<>
			<section className={cnMerge("", className)}></section>

			<Button unstyled={true} className="z-10 lg:hidden" onClick={toggleNavShow}>
				{isNavShow ?
					<IconBox icon="basil:cancel-outline" className="size-6" />
				:	<IconBox icon="mi:menu" className="size-6" />}
			</Button>
		</>
	);
}
