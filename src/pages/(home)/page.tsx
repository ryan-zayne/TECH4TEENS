import {
	groupPics,
	heroBgOneMobile,
	heroBgTwoMobile,
	heroImageDesktop,
	heroImageMobile,
} from "@/assets/images/landing";
import { Image } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Main } from "./-components/Main";

function HomePage() {
	return (
		<Main>
			<section className="relative flex flex-col items-center px-7 pt-[88px]">
				<div className="absolute inset-0 isolate -z-1">
					<Image
						src={heroBgOneMobile}
						alt=""
						layout="fullWidth"
						fetchpriority="high"
						className="absolute inset-0 h-full object-cover mix-blend-multiply"
					/>
					<Image
						src={heroBgTwoMobile}
						alt=""
						layout="fullWidth"
						fetchpriority="high"
						className="absolute inset-0 h-full object-cover mix-blend-multiply"
					/>
				</div>

				<figure
					className="flex w-full max-w-[305px] items-center gap-1 rounded-[24px] bg-linear-to-r
						from-[hsl(287,100%,95%)] to-[hsl(300,100%,97%)] py-1.5 pl-2"
				>
					<Image src={groupPics} layout="fullWidth" className="h-6 w-[66px]" />

					<figcaption className="text-[8px] text-tech4teens-primary">
						Join thousands of parents enroll your kids on Tech4Teen
					</figcaption>
				</figure>

				<article className="mt-3 flex max-w-[300px] flex-col gap-2 text-center">
					<h1 className="text-[24px]/8 font-semibold">
						Empower your teens with skills their{" "}
						<span className="text-tech4teens-primary">future self will be proud of.</span>
					</h1>

					<p className="text-[14px] font-medium text-tech4teens-sub-text-color">
						In a world where technology shapes every industry, give your child the advantage they
						need to thrive.
					</p>

					<div className="mt-6.5 flex flex-col gap-3">
						<Button theme="primary" size="full-width">
							Register Your Child
						</Button>
						<Button theme="primary-inverse" size="full-width">
							Make Enquiries
						</Button>
					</div>
				</article>

				<Image className="mt-9" src={heroImageDesktop} alt="" layout="fullWidth" />
			</section>
		</Main>
	);
}

export default HomePage;
