import { NavLink } from "react-router";
import { ForWithWrapper } from "@/components/common";
import { Logo } from "@/components/common/Logo";
import { courseDetails } from "../-constants/courseDetails";
import { navLinkItems } from "../-constants/navLinkItems";

function Footer() {
	return (
		<footer className="flex w-full flex-col gap-4 bg-[hsl(0,0%,96%)] px-6 pt-7 pb-9">
			<section className="flex flex-col gap-2">
				<Logo height={33} className="h-[33px] w-[94px]" />

				<p className="max-w-[292px] text-[12px]">
					To equip teens with tech and creative skills through hands-on projects, building real-world
					projects, and nurturing creativity, so they are prepared for the opportunities of tomorrow
					beyond just certificates.
				</p>
			</section>

			<section className="flex flex-col gap-2">
				<h3 className="text-[14px] font-semibold">Products</h3>

				<ForWithWrapper
					as="nav"
					each={navLinkItems}
					className="flex flex-col gap-1 text-[12px]"
					renderItem={(item) => (
						<NavLink key={item.href} to={item.href}>
							{item.title}
						</NavLink>
					)}
				/>
			</section>

			<section className="flex flex-col gap-2">
				<h3 className="text-[14px] font-semibold">Courses</h3>

				<ForWithWrapper
					as="nav"
					className="flex flex-col gap-1 text-[12px]"
					each={courseDetails}
					renderItem={(item) => (
						<NavLink key={item.title} to={item.href}>
							{item.title}
						</NavLink>
					)}
				/>
			</section>

			<hr className="mt-4 mb-5 border border-[hsl(0,0%,85%)]" />

			<p className="text-center text-[11px]">2025.All right reserved</p>
		</footer>
	);
}

export { Footer };
