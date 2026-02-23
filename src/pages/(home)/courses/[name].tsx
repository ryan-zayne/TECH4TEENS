import { useParams } from "react-router";
import { sectionBg } from "@/assets/images/landing";
import { ForWithWrapper, IconBox, ImageResponsive } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cnJoin } from "@/lib/utils/cn";
import { courseDetails } from "../-components/constants/courseDetails";
import { Main } from "../-components/Main";
import { WhatsAppLink } from "../-components/WhatsAppLink";

function CourseDetailPage() {
	const { name } = useParams();

	const courseDetail = courseDetails.find((detail) => name && detail.href.endsWith(name));

	if (!courseDetail?.extraDetails) {
		throw new Error("Course not found!");
	}

	return (
		<Main className="gap-6 pb-[100px]">
			<section
				className="relative isolate flex flex-col items-center gap-1 py-10.5 text-center text-white"
			>
				<ImageResponsive
					src={sectionBg}
					height={143}
					className="absolute inset-0 -z-1 size-full object-cover"
				/>

				<h1 className="font-semibold">{courseDetail.title}</h1>
				<p className="max-w-[292px] text-[12px]">{courseDetail.description}</p>
			</section>

			<section className="px-6">
				<ImageResponsive
					src={courseDetail.image}
					height={266}
					className={cnJoin(
						"h-[266px] rounded-[16px]",
						courseDetail.title === "Basic Computer Tools" && "border border-tech4teens-footer-color"
					)}
				/>
				<Card.Root
					className="mt-6.5 flex flex-col gap-12 rounded-[12px] border border-[hsl(0,0%,76%)] px-6.5
						pt-7.5 pb-10"
				>
					<Card.Content className="flex flex-col gap-4">
						<Card.Title>What you will learn</Card.Title>

						<ForWithWrapper
							className="flex flex-col gap-3"
							each={courseDetail.extraDetails.objectives}
							renderItem={(item) => (
								<li key={item} className="flex items-start gap-2">
									<span className="size-4">
										<IconBox icon="uil:check" className="size-full shrink-0" />
									</span>
									<p className="text-[12px]">{item}</p>
								</li>
							)}
						/>
					</Card.Content>

					<Card.Footer className="flex items-center justify-between">
						<Card.Action as={Button} theme="primary-ghost" asChild={true}>
							<WhatsAppLink>Register</WhatsAppLink>
						</Card.Action>

						<span className="inline-flex items-center font-bold">
							<IconBox icon="tabler:currency-naira" />
							<p>{courseDetail.price}</p>
						</span>
					</Card.Footer>
				</Card.Root>

				<article className="mt-8.5 flex flex-col gap-2 text-[12px]">
					<figure className="flex items-center gap-2">
						<ImageResponsive
							src={courseDetail.extraDetails.tutor.image}
							height={36}
							width={36}
							className="size-9 rounded-[4px]"
						/>
						<figcaption>Tutor: {courseDetail.extraDetails.tutor.name}</figcaption>
					</figure>

					<figure className="flex items-center gap-2">
						<span className="size-4">
							<IconBox icon="mingcute:time-line" className="size-full shrink-0" />
						</span>
						<figcaption>Duration: {courseDetail.extraDetails.duration} </figcaption>
					</figure>

					<p>Requirements: {courseDetail.extraDetails.requirements.join(", ")}</p>
				</article>
			</section>
		</Main>
	);
}

export default CourseDetailPage;
