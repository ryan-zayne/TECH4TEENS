import {
	courseFive,
	courseFour,
	courseOne,
	courseSix,
	courseThree,
	courseTwo,
	groupPics,
	heroBgOneMobile,
	heroBgTwoMobile,
	heroImageMobile,
	logoBig,
	tabImageOne,
} from "@/assets/images/landing";
import { TabsAnimated } from "@/components/animated/ui";
import { ForWithWrapper, IconBox, Image } from "@/components/common";
import { UserIcon } from "@/components/icons/UserIcon";
import { DropdownMenu } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CourseCard } from "./-components/CourseCard";
import { Main } from "./-components/Main";

const courses = [
	{
		description:
			"Learn the fundamentals of basic computer tools including document creation, spreadsheets, and presentations using Microsoft applications.",
		image: courseOne,
		price: "30,000",
		title: "Basic Computer Tools",
	},
	{
		description:
			"Master design basics and create stunning visuals using Photoshop, Illustrator, CorelDRAW, and more.",
		image: courseTwo,
		price: "30,000",
		title: "Graphic Designing & Branding",
	},
	{
		description:
			"Learn how to write clear and persuasive content that communicates ideas effectively for storytelling and branding",
		image: courseThree,
		price: "40,000",
		title: "Copy Writing",
	},
	{
		description:
			"Learn how to design mobile apps and websites that solve real-world problems in today’s tech industry.",
		image: courseFour,
		price: "60,000",
		title: "Digital Product Designing",
	},
	{
		description:
			"Learn how to build software applications while developing strong problem-solving and logical thinking skills..",
		image: courseFive,
		price: "120,000",
		title: "Software Development",
	},
	{
		description:
			"Learn how to build AI workflows to automate tasks like data processing, report generation, and system monitoring.",
		image: courseSix,
		price: "60,000",
		title: "AI Automation",
	},
];

function HomePage() {
	return (
		<Main className="max-w-[402px] gap-[54px] pb-[102px]">
			<section className="relative flex flex-col items-center px-7 pt-[88px] pb-3.5">
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
				</article>

				<Image
					className="mx-2 mt-7 h-[122px] w-full"
					src={heroImageMobile}
					height={122}
					layout="fullWidth"
				/>

				<div className="mt-8 flex w-full max-w-[300px] flex-col gap-3">
					<Button theme="primary" size="full-width">
						Register Your Child
					</Button>
					<Button theme="primary-inverse" size="full-width">
						Make Enquiries
					</Button>
				</div>
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold">Explore All Courses</h2>
					<p className="text-[12px] text-tech4teens-sub-text-color">
						Choose the right course to help your teen develop and advance their skills.
					</p>
				</article>

				<article className="flex flex-col gap-4">
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

					<ForWithWrapper
						each={courses}
						className="flex flex-col gap-4"
						renderItem={(item) => <CourseCard {...item} />}
					/>
				</article>
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold">Why Tech4Teens</h2>
					<p className="text-[12px]">
						Choose the right course to help your teen develop and advance their skills.
					</p>
				</article>

				<TabsAnimated.Root defaultValue="tab-1" className="gap-4">
					<TabsAnimated.ContentList>
						<TabsAnimated.Content value="tab-1">
							<Image
								src={tabImageOne}
								alt="Tab Image One"
								height={266}
								className="h-auto w-full"
								layout="fullWidth"
							/>
						</TabsAnimated.Content>
						<TabsAnimated.Content value="tab-2">
							<Image
								src={tabImageOne}
								alt="Tab Image One"
								height={266}
								className="h-auto w-full"
								layout="fullWidth"
							/>
						</TabsAnimated.Content>
						<TabsAnimated.Content value="tab-3">
							<Image
								src={tabImageOne}
								alt="Tab Image One"
								height={266}
								className="h-auto w-full"
								layout="fullWidth"
							/>
						</TabsAnimated.Content>
					</TabsAnimated.ContentList>

					<TabsAnimated.List
						classNames={{
							highlight: "-left-1 w-[20px] rounded-l-[12px] bg-tech4teens-primary shadow-none",
							list: "flex-col gap-3 bg-transparent",
						}}
					>
						<TabsAnimated.Trigger
							value="tab-1"
							className="flex-col items-start rounded-[12px] bg-[hsl(0,0%,95%)] px-6 py-3.5
								text-left whitespace-normal"
						>
							<h3 className="text-[14px] font-semibold">Learn from Experts</h3>
							<p className="text-[12px]">
								Students will learn from experienced professionals who know how to teach teens in a
								way they can easily understand.
							</p>
						</TabsAnimated.Trigger>
						<TabsAnimated.Trigger
							value="tab-2"
							className="flex-col items-start rounded-[12px] bg-[hsl(0,0%,95%)] px-6 py-3.5
								text-left whitespace-normal"
						>
							<h3 className="text-[14px] font-semibold">Live Video Classes</h3>
							<p className="text-[12px]">
								Students learn in real-time and can interact directly with tutors, ask questions,
								and get immediate feedback.
							</p>
						</TabsAnimated.Trigger>
						<TabsAnimated.Trigger
							value="tab-3"
							className="flex-col items-start rounded-[12px] bg-[hsl(0,0%,95%)] px-6 py-3.5
								text-left whitespace-normal"
						>
							<h3 className="text-[14px] font-semibold">Practical Learning and Assessments</h3>
							<p className="text-[12px]">
								Courses are hands-on with real projects and assessments, so teens build skills they
								can use even at a young age.
							</p>
						</TabsAnimated.Trigger>
					</TabsAnimated.List>
				</TabsAnimated.Root>
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold">Frequently Asked Questions</h2>
					<p className="text-[12px]">Everything you need to know about Tech4Teens</p>
				</article>

				<article className="flex flex-col gap-3 rounded-[24px] border border-[hsl(0,0%,76%)] p-3.5">
					<figure
						className="flex flex-col items-center gap-9 rounded-[16px] bg-[hsl(275,53%,45%)] px-3.5
							py-7.5"
					>
						<figcaption className="max-w-[260px] text-[12px]/4 text-tech4teens-bg-color">
							Tech4Teens is designed for teenagers between the ages of 13 and 19 who are interested
							in learning practical tech skills. No prior experience is required, as all courses are
							structured to start from the basics and gradually build confidence and competence.
						</figcaption>

						<Image src={logoBig} height={96} layout="fullWidth" />
					</figure>

					<div
						className="flex h-[72px] items-center gap-2 rounded-[8px] border
							border-tech4teens-primary bg-[hsl(0,0%,96%)] px-4"
					>
						<span className="size-3 rounded-full bg-tech4teens-primary" />
						<p>Who can enroll in Tech4Teens?</p>
					</div>
				</article>
			</section>
		</Main>
	);
}

export default HomePage;
