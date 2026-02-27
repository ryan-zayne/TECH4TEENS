import { useDragScroll } from "@zayne-labs/ui-react/ui/drag-scroll";
import { logoBig } from "@/assets/images/landing";
import { For, ForWithWrapper, ImageResponsive } from "@/components/common";
import { Tabs } from "@/components/ui";

const faqs = [
	{
		answer:
			"Tech4Teens is designed for teenagers between the ages of 13 and 19 who are interested in learning practical tech skills. No prior experience is required, as all courses are structured to start from the basics and gradually build confidence and competence.",
		question: "Who can enroll in Tech4Teens?",
	},
	{
		answer:
			"No prior tech knowledge is needed. Our programs are beginner-friendly and carefully designed to help teens understand concepts step by step, regardless of their current skill level.",
		question: "Do students need any tech background before joining?",
	},
	{
		answer:
			"Classes are conducted through live video sessions, allowing students to learn in real time. This format enables students to see their tutors, ask questions during lessons, and actively participate in discussions, creating an engaging learning environment.",
		question: "How are the classes conducted?",
	},
	{
		answer:
			"Tech4Teens focuses strongly on practical learning. Students work on hands-on tasks, real projects, and assessments that help them apply what they learn and build usable skills from an early age.",
		question: "Are the courses practical or theory-based?",
	},
	{
		answer:
			"Yes. Students receive continuous support from experienced tutors, including guidance during classes, feedback on assessments, and help whenever they encounter challenges, ensuring steady progress throughout the course.",
		question: "Will my child receive support during the course?",
	},
] as const;

function Faqs() {
	const { propGetters } = useDragScroll<HTMLDivElement>({});

	return (
		<Tabs.Root defaultValue={faqs[0].question}>
			<article className="flex flex-col gap-3 rounded-[24px] border border-[hsl(0,0%,76%)] p-3.5">
				<figure
					className="flex flex-col items-center gap-9 rounded-[16px] bg-[hsl(275,53%,45%)] px-3.5
						py-7.5"
				>
					<ForWithWrapper
						as="div"
						className="min-h-[100px] max-w-[260px] text-[12px]/4 text-tech4teens-bg-color"
						each={faqs}
						renderItem={(item) => (
							<Tabs.Content key={item.question} value={item.question} asChild={true}>
								<p>{item.answer}</p>
							</Tabs.Content>
						)}
					/>

					<ImageResponsive
						src={logoBig}
						width={300}
						height={96}
						className="h-[96px] w-full shrink-0"
					/>
				</figure>

				<Tabs.List
					unstyled={true}
					{...propGetters.getRootProps({
						className: "flex gap-3 h-[72px]",
					})}
				>
					<For
						each={faqs}
						renderItem={(item) => (
							<Tabs.Trigger
								key={item.question}
								unstyled={true}
								value={item.question}
								{...propGetters.getItemProps({
									className: `h-full flex w-full max-w-[300px] shrink-0 cursor-pointer items-center
												gap-2 rounded-[8px] border bg-[hsl(0,0%,96%)] px-4
												border-tech4teens-primary`,
								})}
							>
								<span
									className="size-3 shrink-0 rounded-full bg-tech4teens-primary opacity-0
										transition-opacity duration-300 in-data-[state=active]:opacity-100"
								/>
								<p>{item.question}</p>
							</Tabs.Trigger>
						)}
					/>
				</Tabs.List>
			</article>
		</Tabs.Root>
	);
}

export { Faqs };
