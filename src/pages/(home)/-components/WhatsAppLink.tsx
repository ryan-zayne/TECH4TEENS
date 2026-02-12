function WhatsAppLink(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<a
			href="https://wa.me/2348145046180?text=Hello%2C+I+want+to+register+my+child+for+tech4teens"
			target="_blank"
			rel="noreferrer noopener"
		>
			{children}
		</a>
	);
}

export { WhatsAppLink };
