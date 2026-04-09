import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { SonnerToaster } from "./components/common/Toaster";
import RootLayout from "./pages/layout";

/* Layouts */
const HomeLayout = lazy(() => import("./pages/(home)/layout"));

const routes = createRoutesFromElements(
	<Route Component={RootLayout}>
		<Route path="/test" Component={lazy(() => import("./pages/page.test"))} />

		<Route Component={HomeLayout}>
			<Route path="/" Component={lazy(() => import("./pages/(home)/page"))} />
			<Route
				path="/courses/:name"
				Component={lazy(() => import("./pages/(home)/courses/[name].page"))}
			/>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return (
		<>
			<RouterProvider router={browserRouter} />

			<SonnerToaster />
		</>
	);
}
