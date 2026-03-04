import type { InferProps } from "@zayne-labs/toolkit-react/utils";

const WHATSAPP_MESSAGE = "Hello, I want to register my ward for the Tech4teens program";
const WHATSAPP_PHONE = "2348145046180";
const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function WhatsAppLink(props: Omit<InferProps<"a">, "href">) {
	return <a href={whatsappUrl} target="_blank" rel="noreferrer noopener" {...props} />;
}

export { WhatsAppLink };
