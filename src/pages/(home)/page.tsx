import { groupPics, heroBgOneMobile, heroBgTwoMobile, heroImageDesktop } from "@/assets/images/landing";
import { IconBox, Image } from "@/components/common";
import { UserIcon } from "@/components/icons/UserIcon";
import { DropdownMenu } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Main } from "./-components/Main";

function HomePage() {
	return (
		<Main className="gap-12 pb-[102px]">
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

				<Image className="mx-2 mt-9" src={heroImageDesktop} alt="" layout="fullWidth" />
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold">Explore All Courses</h2>
					<p className="text-[12px] text-tech4teens-sub-text-color">
						Choose the right course to help your teen develop and advance their skills.
					</p>
				</article>

				<article>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild={true}>
							<Button
								theme="primary-inverse"
								size="large"
								className="max-w-[152px] justify-between border-tech4teens-sub-text-color
									text-tech4teens-text-color"
							>
								<span className="inline-flex items-center gap-1">
									<UserIcon />
									Instructors
								</span>

								<IconBox
									icon="iconamoon:arrow-down-2"
									className="size-6 transition-[rotate] in-data-[state=open]:rotate-180"
								/>
							</Button>
						</DropdownMenu.Trigger>
					</DropdownMenu.Root>
				</article>
			</section>
		</Main>
	);
}

export default HomePage;
