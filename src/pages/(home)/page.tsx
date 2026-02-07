import { heroBgOne, heroBgTwoMobile } from "@/assets/images";
import { Image } from "@/components/common";
import { Main } from "./-components/Main";

function HomePage() {
	return (
		<Main>
			<section className="h-[580px]">
				<div className="relative isolate size-full">
					<Image
						src={heroBgOne}
						alt=""
						layout="fullWidth"
						fetchpriority="high"
						className="absolute inset-0 object-cover mix-blend-multiply"
					/>
					<Image
						src={heroBgTwoMobile}
						alt=""
						layout="fullWidth"
						fetchpriority="high"
						className="absolute inset-0 object-cover mix-blend-multiply"
					/>
				</div>
			</section>
		</Main>
	);
}

export default HomePage;
