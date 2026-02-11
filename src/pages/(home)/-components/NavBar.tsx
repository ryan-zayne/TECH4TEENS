import { useScrollObserver, useToggle } from "@zayne-labs/toolkit-react";
import { ForWithWrapper, IconBox, NavLink } from "@/components/common";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cnJoin, cnMerge } from "@/lib/utils/cn";

function NavBar() {
	const { isScrolled, observedElementRef } = useScrollObserver({
		rootMargin: "10px 0px 0px",
	});

	return (
		<header
			ref={observedElementRef}
			className={cnJoin(
				`fixed inset-[0_0_auto_0] isolate z-500 flex w-full items-center justify-between p-4 px-6
				transition-[background-color,box-shadow] duration-300 ease-[ease]`,
				isScrolled && "bg-tech4teens-bg-color shadow-[0_4px_6px_theme(--color-black/0.2)]"
			)}
		>
			<Logo height={30} className="z-1 h-7.5 w-[74px]" />

			<MobileNavigation className="lg:hidden" />
		</header>
	);
}

export { NavBar };

const linkItems = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "#",
		title: "Explore Courses",
	},
	{
		href: "#",
		title: "Why Tech4Teens",
	},
	{
		href: "#",
		title: "FAQs",
	},
];

function MobileNavigation(props: { className?: string }) {
	const { className } = props;

	const [isNavShow, toggleNavShow] = useToggle(false);

	return (
		<>
			<section
				className={cnMerge(
					`fixed inset-[0_0_0_auto] flex flex-col gap-7 overflow-x-hidden bg-tech4teens-bg-color
					pt-[68px] transition-[width] ease-[ease]`,
					isNavShow ? "w-full duration-350" : "w-0 duration-500",
					className
				)}
			>
				<ForWithWrapper
					as="nav"
					className="flex flex-col gap-4 pl-6 text-[12px] text-nowrap"
					each={linkItems}
					renderItem={(linkItem) => (
						<NavLink key={linkItem.title} to={linkItem.href}>
							{linkItem.title}
						</NavLink>
					)}
				/>
			</section>

			<Button unstyled={true} className={cnMerge("z-1", className)} onClick={toggleNavShow}>
				{isNavShow ?
					<IconBox icon="basil:cancel-outline" className="size-6" />
				:	<IconBox icon="mi:menu" className="size-6" />}
			</Button>
		</>
	);
}
