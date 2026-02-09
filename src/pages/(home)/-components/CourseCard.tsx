import { IconBox, Image } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function CourseCard(props: { description: string; image: string; price: string; title: string }) {
	const { description, image, price, title } = props;

	return (
		<Card.Root
			key={title}
			as="li"
			className="flex flex-col gap-[18px] rounded-[24px] border border-tech4teens-footer-color px-3.5
				py-5"
		>
			<Card.Header className="relative">
				<span className="absolute top-[52px] left-0 bg-tech4teens-secondary px-2.5 py-1 text-[11px]">
					5 Slots Available
				</span>
				<Image src={image} layout="fullWidth" className="rounded-[16px]" />
			</Card.Header>

			<Card.Content className="flex flex-col gap-2">
				<Card.Title className="text-[14px] font-semibold">{title}</Card.Title>
				<Card.Description className="text-[12px] text-tech4teens-text-color">
					{description}
				</Card.Description>
			</Card.Content>

			<Card.Footer className="flex items-center justify-between">
				<Card.Action as={Button} theme="primary-inverse">
					Register
				</Card.Action>

				<span className="inline-flex items-center font-bold">
					<IconBox icon="tabler:currency-naira" />
					<p>{price}</p>
				</span>
			</Card.Footer>
		</Card.Root>
	);
}

export { CourseCard };
