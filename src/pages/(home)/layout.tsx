import { Outlet } from "react-router";
import { NavBar } from "./-components/NavBar";

function HomeLayout() {
	return (
		<div className="flex grow flex-col">
			<NavBar />
			<Outlet />
		</div>
	);
}

export default HomeLayout;
