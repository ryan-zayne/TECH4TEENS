import { Outlet } from "react-router";
import { Footer } from "./-components/Footer";
import { NavBar } from "./-components/NavBar";

function HomeLayout() {
	return (
		<div className="mx-auto flex max-w-[402px] grow flex-col items-center">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomeLayout;
