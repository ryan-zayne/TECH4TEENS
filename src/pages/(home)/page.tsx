import {
	groupPics,
	heroBgOneDesktop,
	heroBgTwoDesktop,
	heroImageDesktop,
	sectionBg,
	tabImageOne,
	tabImageThree,
	tabImageTwo,
} from "@/assets/images/landing";
import { TabsAnimated } from "@/components/animated/ui";
import { For, ForWithWrapper, IconBox, ImageResponsive } from "@/components/common";
import { UserIcon } from "@/components/icons/UserIcon";
import { DropdownMenu } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CourseCard } from "./-components/CourseCard";
import { Faqs } from "./-components/Faqs";
import { Main } from "./-components/Main";
import { WhatsAppLink } from "./-components/WhatsAppLink";
import { courseDetails } from "./-constants/courseDetails";

const whyTech4TeensItems = [
	{
		description:
			"Students will learn from experienced professionals who know how to teach teens in a way they can easily understand.",
		image: tabImageOne,
		title: "Learn from Experts",
		value: "tab-1",
	},
	{
		description:
			"Students learn in real-time and can interact directly with tutors, ask questions, and get immediate feedback.",
		image: tabImageTwo,
		title: "Live Video Classes",
		value: "tab-2",
	},
	{
		description:
			"Courses are hands-on with real projects and assessments, so teens build skills they can use even at a young age.",
		image: tabImageThree,
		title: "Practical Learning and Assessments",
		value: "tab-3",
	},
] as const;

const tutors = [
	{
		course: "Basic Computer Tools",
		name: "Chisom M.",
	},
	{
		course: "Graphic Design & Branding",
		name: "Adibe J.",
	},
	{
		course: "Copy Writing",
		name: "Michael U.",
	},
	{
		course: "Digital Product Designing",
		name: "Sarah C.",
	},
	{
		course: "Software Development",
		name: "Zayne C.",
	},
	{
		course: "AI Automation",
		name: "John U.",
	},
] as const;

function HomePage() {
	return (
		<Main className="gap-[54px] pb-[102px]">
			<section className="relative isolate flex flex-col items-center px-7 pt-[88px] pb-3.5">
				<div className="absolute inset-0 isolate -z-1">
					<ImageResponsive
						src={heroBgOneDesktop}
						height={587}
						fetchPriority="high"
						className="absolute inset-0 size-full mix-blend-multiply"
					/>
					<ImageResponsive
						src={heroBgTwoDesktop}
						height={587}
						fetchPriority="high"
						className="absolute inset-0 size-full mix-blend-multiply"
					/>
				</div>

				<figure
					className="flex w-full max-w-[305px] items-center gap-1 rounded-[24px] bg-linear-to-r
						from-[hsl(287,100%,95%)] to-[hsl(300,100%,97%)] py-1.5 pl-2"
				>
					<ImageResponsive
						src={groupPics}
						height={24}
						width={66}
						className="h-6 w-[66px] rounded-[12px]"
					/>

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

				<div className="mt-8 flex w-full max-w-[300px] flex-col gap-3">
					<Button theme="primary" size="full-width" asChild={true}>
						<WhatsAppLink>Register Your Child</WhatsAppLink>
					</Button>
					<Button theme="primary-ghost" size="full-width" asChild={true}>
						<WhatsAppLink>Make Enquiries</WhatsAppLink>
					</Button>
				</div>

				<ImageResponsive
					className="mt-7 h-[122px] w-full rounded-[12px]"
					src={heroImageDesktop}
					height={122}
				/>
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold" id="explore-courses">
						Explore All Courses
					</h2>
					<p className="text-[12px] text-tech4teens-sub-text-color">
						Choose the right course to help your teen develop and advance their skills.
					</p>
				</article>

				<article className="flex flex-col gap-4">
					<DropdownMenu.Root modal={false}>
						<DropdownMenu.Trigger asChild={true}>
							<Button
								theme="primary-ghost"
								size="large"
								className="max-w-[152px] justify-between border-tech4teens-sub-text-color
									text-tech4teens-text-color"
							>
								<figure className="inline-flex items-center gap-1">
									<UserIcon />
									<figcaption>Instructors</figcaption>
								</figure>

								<IconBox
									icon="iconamoon:arrow-down-2"
									className="size-6 transition-[rotate] in-data-[state=open]:rotate-180"
								/>
							</Button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Content
							className="flex min-w-[162px] flex-col gap-2 border-tech4teens-sub-text-color"
						>
							<For
								each={tutors}
								renderItem={(item) => (
									<DropdownMenu.Item>
										<p className="text-[12px]">
											{item.course}: {item.name}
										</p>
									</DropdownMenu.Item>
								)}
							/>
						</DropdownMenu.Content>
					</DropdownMenu.Root>

					<ForWithWrapper
						each={courseDetails}
						className="flex flex-col gap-4"
						renderItem={(item) => <CourseCard key={item.title} {...item} />}
					/>
				</article>
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold" id="why-tech4teens">
						Why Tech4Teens
					</h2>
					<p className="text-[12px]">
						Choose the right course to help your teen develop and advance their skills.
					</p>
				</article>

				<TabsAnimated.Root defaultValue="tab-1" className="gap-4">
					<TabsAnimated.ContentList>
						{whyTech4TeensItems.map((item) => (
							<TabsAnimated.Content key={item.value} value={item.value} className="h-[266px]">
								<ImageResponsive
									src={item.image}
									alt={item.title}
									height={266}
									className="size-full rounded-[24px] object-cover"
								/>
							</TabsAnimated.Content>
						))}
					</TabsAnimated.ContentList>

					<TabsAnimated.List
						classNames={{
							highlight: "-left-1 w-[20px] rounded-l-[12px] bg-tech4teens-primary shadow-none",
							list: "flex-col gap-3 bg-transparent",
						}}
					>
						<For
							each={whyTech4TeensItems}
							renderItem={(item) => (
								<TabsAnimated.Trigger
									key={item.value}
									value={item.value}
									className="flex-col items-start rounded-[12px] bg-[hsl(0,0%,95%)] px-6 py-3.5
										text-left whitespace-normal"
								>
									<h3 className="text-[14px] font-semibold">{item.title}</h3>
									<p className="text-[12px]">{item.description}</p>
								</TabsAnimated.Trigger>
							)}
						/>
					</TabsAnimated.List>
				</TabsAnimated.Root>
			</section>

			<section className="flex flex-col gap-7.5 px-6">
				<article className="flex max-w-[230px] flex-col gap-0.5 self-center text-center">
					<h2 className="text-[14px] font-semibold" id="faqs">
						Frequently Asked Questions
					</h2>
					<p className="text-[12px]">Everything you need to know about Tech4Teens</p>
				</article>

				<Faqs />
			</section>

			<section className="relative isolate mx-6 flex flex-col items-center gap-6 px-6 py-8.5">
				<ImageResponsive
					height={257}
					src={sectionBg}
					className="absolute inset-0 -z-1 size-full rounded-[16px] object-cover"
				/>

				<article className="flex max-w-[285px] flex-col gap-1 self-center text-center text-white">
					<h2 className="text-[14px] font-semibold">
						We’re on a mission to help teens start their tech journey early
					</h2>
					<p className="text-[11px]">
						We understand the importance of learning valuable skills at a young age and nurturing
						them over time. Your child could be the next big tech star. Give them the opportunity to
						explore and grow their potential in tech.
					</p>
				</article>

				<Button theme="primary-white" size="large" asChild={true}>
					<WhatsAppLink>Register Your Child</WhatsAppLink>
				</Button>
			</section>
		</Main>
	);
}

export default HomePage;
