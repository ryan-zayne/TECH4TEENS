import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { logo } from "@/assets/images";
import { Image } from "./Image";

function Logo(props: Pick<InferProps<typeof Image>, "className" | "height">) {
	return <Image src={logo} alt="Logo" layout="fullWidth" {...props} />;
}

export { Logo };
