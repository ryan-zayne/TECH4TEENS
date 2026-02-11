import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { NavLink } from "react-router";
import { logo } from "@/assets/images";
import { Image } from "./Image";

function Logo(props: Pick<InferProps<typeof Image>, "className" | "height">) {
	return (
		<NavLink to="/" {...props}>
			<Image src={logo} alt="Logo" layout="fullWidth" {...props} />
		</NavLink>
	);
}

export { Logo };
