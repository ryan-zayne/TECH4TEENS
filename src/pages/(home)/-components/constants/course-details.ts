import { defineEnumDeep } from "@zayne-labs/toolkit-type-helpers";
import {
	courseFive,
	courseFour,
	courseOne,
	courseSix,
	courseThree,
	courseTwo,
} from "@/assets/images/courses";

export const courseDetails = defineEnumDeep(
	[
		{
			description:
				"Learn the fundamentals of basic computer tools including document creation, spreadsheets, and presentations using Microsoft applications.",
			href: "/courses/basic-computer-tools",
			image: courseOne,
			price: "30,000",
			title: "Basic Computer Tools",
		},
		{
			description:
				"Master design basics and create stunning visuals using Photoshop, Illustrator, CorelDRAW, and more.",
			href: "/courses/graphic-designing",
			image: courseTwo,
			price: "30,000",
			title: "Graphic Designing & Branding",
		},
		{
			description:
				"Learn how to write clear and persuasive content that communicates ideas effectively for storytelling and branding",
			href: "/courses/copy-writing",
			image: courseThree,
			price: "40,000",
			title: "Copy Writing",
		},
		{
			description:
				"Learn how to design mobile apps and websites that solve real-world problems in today’s tech industry.",
			href: "/courses/digital-product-designing",
			image: courseFour,
			price: "60,000",
			title: "Digital Product Designing",
		},
		{
			description:
				"Learn how to build software applications while developing strong problem-solving and logical thinking skills..",
			href: "/courses/software-development",
			image: courseFive,
			price: "120,000",
			title: "Software Development",
		},
		{
			description:
				"Learn how to build AI workflows to automate tasks like data processing, report generation, and system monitoring.",
			href: "/courses/ai-automation",
			image: courseSix,
			price: "60,000",
			title: "AI Automation",
		},
	],
	{ inferredUnionVariant: "none" }
);
