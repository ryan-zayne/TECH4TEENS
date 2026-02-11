import { Outlet, ScrollRestoration } from "react-router";

function RootLayout() {
	return (
		<div className="flex min-h-svh flex-col bg-tech4teens-bg-color">
			<ScrollRestoration />
			<Outlet />
		</div>
	);
}

export default RootLayout;
