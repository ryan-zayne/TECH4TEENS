import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function WhatsAppLink(props: Omit<InferProps<"a">, "href" | "rel">) {
	return (
		<a
			href="https://wa.me/2348145046180?text=Hello%2C+I+want+to+register+my+child+for+tech4teens"
			target="_blank"
			rel="noreferrer noopener"
			{...props}
		/>
	);
}

export { WhatsAppLink };
