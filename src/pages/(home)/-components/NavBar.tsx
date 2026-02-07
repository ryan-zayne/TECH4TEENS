import { IconBox } from "@/components/common";
import { Logo } from "@/components/common/Logo";

function NavBar() {
	return (
		<header className="absolute z-500 flex w-full items-center justify-between px-6 pt-5">
			<Logo className="h-7.5 w-[74px]" />
			<IconBox icon="mi:menu" className="size-6" />
		</header>
	);
}

export { NavBar };
