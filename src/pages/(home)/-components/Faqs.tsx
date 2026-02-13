import { useDragScroll } from "@zayne-labs/ui-react/ui/drag-scroll";
import { For } from "@/components/common";

const faqs = [
	{
		question: "Who can enroll in Tech4Teens?",
	},
	{
		question: "Do students need any tech background before enrolling?",
	},
	{
		question: "How are the classes conducted?",
	},
	{
		question: "Will my child receive support during training?",
	},
	{
		question: "Are the courses practical or theory-based?",
	},
];

function Faqs() {
	const { propGetters } = useDragScroll<HTMLUListElement>({});

	return (
		<ul {...propGetters.getRootProps({ className: "gap-3" })}>
			<For
				each={faqs}
				renderItem={(item) => (
					<li
						key={item.question}
						{...propGetters.getItemProps({
							className:
								"flex h-[72px] shrink-0 w-[290px] items-center gap-2 rounded-[8px] border border-tech4teens-primary bg-[hsl(0,0%,96%)] px-4",
						})}
					>
						<span className="size-3 shrink-0 rounded-full bg-tech4teens-primary" />
						<p>{item.question}</p>
					</li>
				)}
			/>
		</ul>
	);
}

export { Faqs };
