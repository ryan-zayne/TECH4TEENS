import { defineEnumDeep } from "@zayne-labs/toolkit-type-helpers";
import {
	courseFive,
	courseFour,
	courseOne,
	courseSix,
	courseThree,
	courseTwo,
	tutorBasic,
	tutorDesign,
	tutorSoftware,
} from "@/assets/images/courses";

const duration = "8 weeks";

export const courseDetails = defineEnumDeep([
	{
		description:
			"Learn the fundamentals of basic computer tools including document creation, spreadsheets, and presentations using Microsoft applications.",
		extraDetails: {
			duration,
			objectives: [
				"How to properly use a computer",
				"Creating, saving, renaming, and organizing folders and files",
				"How to save documents correctly",
				"Basic keyboard and mouse skills",
				"Understanding file types and basic document management",
				"Creating and editing documents in Microsoft Word",
				"Designing simple presentations using Microsoft PowerPoint",
				"Entering data and performing basic tasks in Microsoft Excel",
				"Converting documents (Word to PDF, PDF to Word, etc.)",
			],
			requirements: ["A Laptop"],
			tutor: {
				image: tutorBasic,
				name: "Chisom Nkebuisi",
			},
		},
		href: "/courses/basic-computer-tools",
		image: courseOne,
		price: "30,000",
		title: "Basic Computer Tools",
	},
	{
		description:
			"Master design basics and create stunning visuals using Photoshop, Illustrator, CorelDRAW, and more.",
		extraDetails: {
			duration,
			objectives: [
				"Understand what graphic design is and how it works",
				"Use colors, fonts, and layouts the right way",
				"Design clean and attractive flyers and posters",
				"Create social media designs that look professional",
				"Use design tools like Photoshop and Illustrator confidently",
				"Turn your ideas into visual designs",
				"Design for both online platforms and print",
				"Work on real design projects",
				"Build a simple design portfolio",
				"Understand how to work with clients and handle corrections",
			],
			requirements: ["A Laptop", "basic computer knowledge"],
			tutor: {
				image: tutorDesign,
				name: "Adibe Jude",
			},
		},
		href: "/courses/graphic-designing",
		image: courseTwo,
		price: "30,000",
		title: "Graphic Designing & Branding",
	},
	{
		description:
			"Learn how to build software applications while developing strong problem-solving and logical thinking skills..",
		extraDetails: {
			duration,
			objectives: [
				"Understand what HTML is and how websites are structured",
				"Learn the different HTML elements",
				"Know how to properly use HTML tags to build web pages",
				"Learn how to create clean and well-structured website layouts",
				"Understand what CSS does and how it works with HTML",
				"Learn CSS properties and rules for styling websites",
				"Style text, colors, spacing, and layouts",
				"Make websites look clean, attractive, and well-organized",
			],
			requirements: ["A Laptop", "Basic computer knowledge"],
			tutor: {
				image: tutorSoftware,
				name: "Zayne",
			},
		},
		href: "/courses/software-development",
		image: courseFive,

		price: "120,000",
		title: "Software Development",
	},
	{
		description:
			"Learn how to write clear and persuasive content that communicates ideas effectively for storytelling and branding",
		extraDetails: {
			duration,
			objectives: [
				"Learn the foundations of persuasive writing and communication",
				"Understand how storytelling influences emotion and action",
				"Master simple frameworks used in marketing and digital platforms",
				"Write engaging headlines, captions, emails, and short campaign content",
				"Develop creative thinking and idea-generation skills",
				"Practice real-world writing through guided exercises",
			],
			requirements: ["A Laptop"],
			tutor: {
				image: tutorDesign,
				name: "Michael Ugochukwu",
			},
		},
		href: "/courses/copy-writing",
		image: courseThree,
		price: "30,000",
		title: "Copy Writing",
	},
	{
		description:
			"Learn how to design mobile apps and websites that solve real-world problems in today’s tech industry.",
		extraDetails: null,
		href: "#digital-product-designing",
		image: courseFour,
		price: "60,000",
		title: "Digital Product Designing",
	},
	{
		description:
			"Learn how to build AI workflows to automate tasks like data processing, report generation, and system monitoring.",
		extraDetails: null,
		href: "#ai-automation",
		image: courseSix,
		price: "60,000",
		title: "AI Automation",
	},
]);
