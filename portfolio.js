

export const greetings = {
	name: "Portfolio",
	title: "Hello, I'm Pithaya",
	description:
		"Welcome to my portfolio page. I'm a Full Stack web developer having an experience of web applications with React.js, Node.js, Express.js and MongoDB",
	resumeLink:
		"https://drive.google.com/file/d/1Kz5uPrqDFxeabAnRfoYQZftm9bne_LCh/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Pistachio13",
};

export const contact = {};

export const socialLinks = {
	home: "#home",
	skills: "#skills",
	education: "#education",
	experience: "#exp",
	projects: "#projects",
	linkedin: "https://www.linkedin.com/in/Pithaya/",
	github: "https://github.com/Pistachio13",
};

export const skillsSection = {
	title: "Skills",
	subTitle: [
		("“Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.”"),
		("― Henry Ford"),
	],
	data: [
		{
			title: "Full Stack Developer",
			skills: [
				(
					"- Building responsive Single-Page-Apps with React.js -"
				),
				(
					"- Building RESTful APIs with Express.js framwork -"
				),
				(
					"- Managing database with MongoDB -"
				),
				(
					"- Learning Go, TypeScript and Java in progress..... -"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "vscode-icons:file-type-python",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Expressjs",
					fontAwesomeClassname: "vscode-icons:file-type-node",
				},
				{
					skillName: "Go",
					fontAwesomeClassname: "vscode-icons:file-type-go",
				},

				{
					skillName: "TypeScript",
					fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
				},
				{
					skillName: "Nestjs",
					fontAwesomeClassname: "vscode-icons:file-type-nestjs",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-mongo",
				},
				{
					skillName: "SQLite",
					fontAwesomeClassname: "vscode-icons:file-type-sqlite",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "vscode-icons:file-type-git",
				},
			],
		},
	],
};



export const educationInfo = [
	{
		schoolName: "Generation Thailand",
		subHeader: "Junior Software Developer Bootcamp",
		duration: "September 2022 - Present",
		desc: "Participated in boot camp.",
		grade: "No Grade",
		descBullets: [
			"Practiced agile methodologies and development best practices in product development processes.",
			"Learned MERN stack to develop web application.",
			"Applied BSM skills in various scenario via role play.",
		],
	},
	{
		schoolName: "Chiangmai University",
		subHeader: "Bachelor of science: Associated Medical Science, Physical Therapy",
		duration: "July 2015 - July 2018",
		desc: "Participated in Blue & White Medical Services Foundation.",
		grade: "Grade 3.4",
		descBullets: [
			"Joined in Blue & White Medical Services Foundation as a physical therapist volunteer",
			"Worked in mobile health units with interdisciplinary teams",
		],
	}
];

export const experience = [
	{
		role: "Physical Therapist",
		company: "Physical Therapy Clinic",
		companylogo: "/img/icons/common/medical.jpg",
		date: "August 2018 - January 2022",
		desc: "I worked as physical therapist to design treatment programs to restore, maintain and improve physical functioning, alleviate pain and prevent disability.",
	},
	{
		role: "General Manager",
		company: "Physical Therapy Clinic",
		companylogo: "/img/icons/common/medical.jpg",
		date: "January 2019 - January 2022",
		desc: "I worked as general manager at the same place. Delivered business strategy and developed systems and procedures to improve operational quality and team efficiency.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/Pistachio13/developer-myportfolio",
		link: "https://portpistachio.vercel.app/",
	},
	{
		name: "FitGen",
		desc: "Developed an web application using MERN stack that allows user to add personal exercises programs.",
		github: "https://github.com/Pistachio13/FitGen-JSD3",
		link: "https://jsd-fitgen-frontend-8jfgnko5q-krit357.vercel.app",
	},
	{
		name: "Jammming board",
		desc: "Added your playlists with Spotify API",
		github: "https://github.com/Pistachio13/jammmingSpotifyApi",
		link: "https://jammming-spotify-api.vercel.app",
	},
	{
		name: "Nest Clinic",
		desc: "Inserted and stored patient data in clinic. learned TypeScript and Nest.js framework through project",
		github: "https://github.com/Pistachio13/clinic-nestjs",
	},
	{
		name: "Go Clinic API",
		desc: "Learned basic GO language through personal project about clinic management with SQL database.",
		github: "https://github.com/Pistachio13/go-clinic-api",
	},
	{
		name: "Faii Ecommerce",
		desc: "Collaborated project with my friend, Glue shop web application for customers. developed by Vue.js, Express.js and SQL database",
		github: "https://github.com/mikeGLA/Faii_Ecommerce_n_Co",
	},
];



// option to hide or show the ContactUs component
export const showContactUs = false;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Pithaya Promsuwan",
	description:
		"Full Stack Web Developer",
	author: "Pithaya Promsuwan",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://portpistachio.vercel.app",
	keywords: [
		"Pithaya",
		"Pithaya Promsuwan",
		"@Pistachio13",
		"Pistachio13",
		"Portfolio",
		"Pithaya Portfolio ",
		"Pithaya Promsuwan Portfolio",
	],
}
