import { Outlet } from "react-router";
import { Footer } from "./-components/Footer";
import { NavBar } from "./-components/NavBar";

function HomeLayout() {
	return (
		<div className="flex w-full max-w-[402px] grow flex-col items-center self-center">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomeLayout;
