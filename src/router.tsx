import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import RootLayout from "./pages/layout";

/* Layouts */
const HomeLayout = lazy(() => import("./pages/(home)/layout"));

const routes = createRoutesFromElements(
	<Route Component={RootLayout}>
		{/* eslint-disable react-x/no-nested-lazy-component-declarations */}

		<Route path="/test" Component={lazy(() => import("./pages/page.test"))} />

		<Route Component={HomeLayout}>
			<Route path="/" Component={lazy(() => import("./pages/(home)/page"))} />
		</Route>

		{/* eslint-enable react-x/no-nested-lazy-component-declarations */}
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider router={browserRouter} />;
}
