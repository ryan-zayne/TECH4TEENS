import { logo } from "@/assets/images";
import { Image } from "./Image";

function Logo(props: { className?: string }) {
	const { className } = props;

	return <Image src={logo} alt="Logo" layout="fullWidth" className={className} />;
}

export { Logo };
