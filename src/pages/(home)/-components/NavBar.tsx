import { useScrollObserver, useToggle } from "@zayne-labs/toolkit-react";
import { useLocation } from "react-router";
import { ForWithWrapper, IconBox, NavLink } from "@/components/common";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { navLinkItems } from "./constants/navLinkItems";

function NavBar() {
	const { isScrolled, observedElementRef } = useScrollObserver({
		rootMargin: "0px",
	});

	const pathName = useLocation().pathname;

	const isHomepage = pathName === "/";

	return (
		<header
			ref={observedElementRef}
			className={cnJoin(
				isHomepage ? "fixed" : "sticky",
				`inset-[0_0_auto_0] isolate z-500 flex h-[72px] w-full items-center justify-between px-6
				transition-shadow duration-300 ease-[ease]`,
				isScrolled && "bg-tech4teens-bg-color shadow-[0_4px_6px_theme(--color-black/0.2)]"
			)}
		>
			<Logo height={30} className="z-10 h-7.5 w-[74px]" />

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
			<section
				className={cnMerge(
					`absolute inset-[0_0_0_auto] flex h-svh flex-col gap-7 overflow-x-hidden
					bg-tech4teens-bg-color pt-[68px] transition-[width] ease-[ease]`,
					isNavShow ? "w-full duration-350" : "w-0 duration-500",
					className
				)}
				onClick={(event) => {
					const element = event.target as HTMLElement;

					element.tagName === "A" && toggleNavShow();
				}}
			>
				<ForWithWrapper
					as="nav"
					className="flex flex-col gap-4 pl-6 text-[12px] text-nowrap"
					each={navLinkItems}
					renderItem={(item) => (
						<NavLink key={item.href} to={item.href} className="[.active]:text-tech4teens-primary">
							{item.title}
						</NavLink>
					)}
				/>
			</section>

			<Button unstyled={true} className={cnMerge("z-10", className)} onClick={toggleNavShow}>
				{isNavShow ?
					<IconBox icon="basil:cancel-outline" className="size-6" />
				:	<IconBox icon="mi:menu" className="size-6" />}
			</Button>
		</>
	);
}
