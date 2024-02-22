/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
	isSplash: false, //true for splash screen.
	useCustomCursor: true,
};

//Home Page
const greeting = {
	title: "Hello!!!",
	title2: "Sayantan",
	logo_name: "Sayantan Sarkar",
	nickname: "suntansoker",
	full_name: "Sayantan Sarkar",
	subTitle: [" Developer.", " Programmer.", " keen learner."],
	resumeLink:
		"https://drive.google.com/file/d/1O8FJaGdFbawWrHN46NRTDQtmhE2U_1vp/view?usp=drive_link",
	mail: "mailto:sayantanthepointer@gmail.com",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/suntansoker",
	linkedin: "https://www.linkedin.com/in/sayantan-asu",
	gmail: "sayantanthepointer@gmail.com",
	youtube: "https://www.youtube.com/@sayantancodes9219/videos",
};

const skills = {
	data: [
		{
			title: "Full Stack Development",
			fileName: "FullStackImg",
			skills: [
				"⚡ Building responsive website front end using React-Redux",
				"⚡ Developing web frontends using React, Angular and vanilla Javascript",
				"⚡ Creating web backends in Node, Express & Flask",
			],
			softwareSkills: [
				{
					skillName: "HTML5",
					fontAwesomeClassname: "simple-icons:html5",
					style: {
						color: "#E34F26",
					},
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "fa-css3",
					style: {
						color: "#1572B6",
					},
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "simple-icons:javascript",
					style: {
						backgroundColor: "#000000",
						color: "#F7DF1E",
					},
				},
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB",
					},
				},
				{
					skillName: "Angular",
					fontAwesomeClassname: "simple-icons:angular",
					style: {
						color: "#CB3837",
					},
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos-nodejs",
					style: {
						color: "#339933",
					},
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos-mongodb-icon",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos-mysql",
					style: {
						backgroundColor: "transparent",
					},
				},
			],
		},
		{
			title: "Data Science & AI",
			fileName: "DataScienceImg",
			skills: [
				"⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
				"⚡ Experience of working with Machine learning and NLP projects",
				"⚡ Complex quantitative modelling with prompt engineering and data analysis",
			],
			softwareSkills: [
				{
					skillName: "Tensorflow",
					fontAwesomeClassname: "logos-tensorflow",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "Keras",
					fontAwesomeClassname: "simple-icons:keras",
					style: {
						backgroundColor: "white",
						color: "#D00000",
					},
				},
				{
					skillName: "PyTorch",
					fontAwesomeClassname: "logos-pytorch",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos-python",
					style: {
						backgroundColor: "transparent",
					},
				},
			],
		},
	],
};

const competitives = {
	text: "I have participated in various competitive programming contests from time to time. I have participated in Leetcode contests and secured ranks among top 5% in the world.",
	competitiveSites: [
		{
			siteName: "LeetCode",
			iconifyClassname: "simple-icons:leetcode",
			style: {
				color: "#F79F1B",
			},
			profileLink: "https://leetcode.com/suntansoker",
		},
		// ,{
		//   siteName: "HackerRank",
		//   iconifyClassname: "simple-icons:hackerrank",
		//   style: {
		//     color: "#2EC866",
		//   },
		//   profileLink: "",
		// },
		// {
		//   siteName: "Codechef",
		//   iconifyClassname: "simple-icons:codechef",
		//   style: {
		//     color: "#5B4638",
		//   },
		//   profileLink: "",
		// },
		// {
		//   siteName: "Codeforces",
		//   iconifyClassname: "simple-icons:codeforces",
		//   style: {
		//     color: "#1F8ACB",
		//   },
		//   profileLink: "",
		// },
		// {
		//   siteName: "Hackerearth",
		//   iconifyClassname: "simple-icons:hackerearth",
		//   style: {
		//     color: "#323754",
		//   },
		//   profileLink: "",
		// },
		// {
		//   siteName: "Kaggle",
		//   iconifyClassname: "simple-icons:kaggle",
		//   style: {
		//     color: "#20BEFF",
		//   },
		//   profileLink: "",
		// },
	],
};

const degrees = {
	degrees: [
		{
			id: 1,
			title: "Arizona State University",
			subtitle: "Masters in Computer Science",
			logo_path: "ASU-logo.png",
			alt_name: "ASU",
			duration: "Aug 2022 - Dec 2023",
			descriptions: [
				"\u2022 I'm graduated with Masters in Computer Science in Dec 2023, with a GPA of 3.97",
				"\u2022 I have taken core subjects in Algorithms dealing with MST to the fundamentals of ML.",
				"\u2022 I took subjects from Foundation of Algorithms, Statistocal Machine Learning to Data Mining to get a vast exposure.",
				"\u2022 I have developed several projects during my coursework, both group and solo.",
			],
			website_link: "https://www.asu.edu/",
		},
		{
			id: 2,
			title: "Indian Institute of Technology Kharagpur",
			subtitle: "Bachelors in Instrumentation Engineering",
			logo_path: "iitkgp-logo.jpeg",
			alt_name: "IITKgp",
			duration: "Jul 2014 - Apr 2018",
			descriptions: [
				"\u2022 I have studied core subjects like Data Structures and Algorithms",
				"\u2022 I took core subjects dealing with the fundamentals of theoretical Machine Learning.",
				"\u2022 I have implemented several projects based on what I've leart under my Computer Engineering course, and also implemented an algorithm as a part of my Bachelor Thesis",
			],
			website_link: "https://www.iitkgp.ac.in/",
		},
	],
};

// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Teaching and Internship",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			work: true,
			experiences: [
				{
					title: "Software Developer",
					company: "DLT Apps",
					company_url: "https://dltapps.com/",
					logo_path: "dlt_apps_logo.jpeg",
					duration: "Aug 2021 - Apr 2022",
					location: "Bengaluru, Karnataka",
					description:
						" Worked on building an asset management platform using React (TA and Distributor portal) to help asset managers keep track of funds and thereby recommending the best times to invest.Helped in rebranding the portals based on customer needs and worked on email templates and helped to increase the revenue by around a margin of 10%.",
					color: "#0879bf",
				},
				{
					title: "Software Developer",
					company: "Veri5Digital",
					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
					logo_path: "veri5digital_logo.jpeg",
					duration: "Mar 2020 - Aug 2020",
					location: "Bengaluru, Karnataka",
					description:
						"Worked on developing the company’s portal for providing KYC and VideoKYC based solutions for verifying customers using Angular.Thereafter customers are on-boarded based on VoterCard, Driving License, and other PI documents helping in paving the way of several customers like the RBI Bank, and thereby helping in increasing the customer verification influx by around 15%.",
					color: "#1a8e88",
				},
				{
					title: "Project Engineer",
					company: "Wipro",
					company_url: "https://www.wipro.com/",
					logo_path: "wipro-logo.jpeg",
					duration: "Jun 2018 - Dec 2019",
					location: "Bengaluru, Karnataka",
					description:
						"Worked on integrating screens with API on various planning and execution of electrical substations, helping in maintaining a steady revenue growth of the client.The screens were developed in React and involved assignment of work to various group levels from the project manager to the project workers.",
					color: "#0879bf",
				},
			],
		},
		{
			title: "Teaching",
			experiences: [
				{
					title: "Teaching Assistant",
					company: "Arizona State University",
					company_url: "https://www.asu.edu/",
					logo_path: "ASU-logo.png",
					duration: "Aug 2023 - Dec 2023",
					location: "Tempe, Arizona",
					description:
						"Worked as a TA for teaching ML towards Civil Engn, needed for concrete analysis, etc. My work included teaching and giving code walkthroughs from Python basics to advanced topics like CNN and Transformers. Apart from that, I was also responsible for giving classworks and setting homeworks on various ML topics.",
					color: "#ff0000",
				},
			],
		},
		{
			title: "Internship",
			experiences: [
				{
					title: "Machine Learning Intern",
					company: "Vaultedge",
					company_url: "https://vaultedge.com/",
					logo_path: "vaultedge_logo.jpeg",
					duration: "Mar 2017 - May 2017",
					location: "Bengaluru, Karnataka",
					description:
						"Built a chatbot system using python by training a classifier on a corpus of leave policy documents and then estimating the answers to leave policy questions. Pre-processing, pickling, and later classification was done using Linear SVM.The vocabulary created was post-processed and used to predict labels and answers pertaining to leave policy documents, thereby forming the base for document analysis and caught notice from several document vendors.",
					color: "#0879bf",
				},
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
	avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "profile-me.jpg",
		description:
			"I am available on the following social media sites. You can contact me as and when needed. I am open to exploration and work in the most challenging scenarios and environments",
	},
	blogSection: {
		title: "Posts",
		subtitle:
			"For the fun of sharing knowledge and insights, I do post in a while or two to create impact. So do checkout some of my posts.",
		link: "https://twitter.com/thesuntansoker",
		avatar_image_path: "blogs_image.svg",
	},
};

const projects = {
	data: [
		{
			id: "0",
			name: "Mussical",
			url: "https://mussical.com",
			description:
				"This website is built to develop an understanding of Music Theory with accompanying tuns and pictures, taught lesson by lesson.",
			languages: [
				{
					name: "Angular",
					iconifyClass: "logos-angular-icon",
				},
				{
					name: "NodeJS",
					iconifyClass: "logos-nodejs",
				},
				{
					name: "MongoDB",
					iconifyClass: "logos-mongodb-icon",
				},
				{
					name: "AWS",
					iconifyClass: "logos-aws",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/muSSical-angular",
					iconifyClass: "ri:github-fill",
				},
				{
					name: "Live Demo",
					url: "https://mussical.com",
					iconifyClass: "mdi:web",
				},
			],
		},
		{
			id: "1",
			name: "ShoppingKart",
			url: "https://github.com/suntansoker/ShoppingKart",
			description:
				"A shopping cart app with the ability to add, edit, delete items from the shopping basket, built to get a better understanding how major retailers work.",
			languages: [
				{
					name: "HTML5",
					iconifyClass: "logos-html-5",
				},
				{
					name: "CSS3",
					iconifyClass: "logos-css-3",
				},
				{
					name: "Angular",
					iconifyClass: "logos-angular-icon",
				},
				{
					name: "TypeScript",
					iconifyClass: "skill-icons:typescript",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/ShoppingKart",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "2",
			name: "LeetCode-Py",
			url: "https://github.com/suntansoker/Leetcode-Py",
			description:
				"A collection of all the solved Leetcode weekly, bi-weekly contests, and daily problems with both questions and solutions in Python.",
			languages: [
				{
					name: "Python",
					iconifyClass: "logos-python",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/Leetcode-Py",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "3",
			name: "Portfolio Website",
			url: "https://sayantan-portfolio.vercel.app/",
			description:
				"My portfolio website made with React and supporting animation libraries covering my full comprehensive background and information.",
			languages: [
				{
					name: "HTML5",
					iconifyClass: "logos-html-5",
				},
				{
					name: "CSS3",
					iconifyClass: "logos-css-3",
				},
				{
					name: "JavaScript",
					iconifyClass: "logos-javascript",
				},
				{
					name: "ReactJS",
					iconifyClass: "logos-react",
				},
				{
					name: "Vercel",
					iconifyClass: "logos-vercel-icon",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/sayantan-portfolio",
					iconifyClass: "ri:github-fill",
				},
				{
					name: "Live Demo",
					url: "https://sayantan-portfolio.vercel.app/",
					iconifyClass: "mdi:web",
				},
			],
		},
		{
			id: "4",
			name: "CSES Problem Set",
			url: "https://github.com/suntansoker/CSES-problem-set",
			description:
				"A curated problem solution set of one of the most beloved set in Competitive Programming solved using Python.",
			languages: [
				{
					name: "Python",
					iconifyClass: "logos-python",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/CSES-problem-set",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "5",
			name: "Striver's DSA Sheet",
			url: "https://github.com/suntansoker/Striver-DSA",
			description:
				"A solution set to Striver's DSA sheet, the roadmap to mastering Data Structure and Algorithms in detail, in Python.",
			languages: [
				{
					name: "Python",
					iconifyClass: "logos-python",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/Striver-DSA",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "6",
			name: "LeetCode-JS",
			url: "https://github.com/suntansoker/LeetCode-JS",
			description:
				"A curated problems on Arrays, Strings, Dynamic Programming in Leetcode using Javascript. Explained with corresponding videos on youtube.",
			languages: [
				{
					name: "JavaScript",
					iconifyClass: "logos-javascript",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/LeetCode-JS",
					iconifyClass: "ri:github-fill",
				},
				{
					name: "Youtube",
					url: "https://www.youtube.com/@sayantancodes9219/videos",
					iconifyClass: "mdi:web",
				},
			],
		},
		{
			id: "7",
			name: "AlgoJS",
			url: "https://github.com/suntansoker/AlgoJS",
			description:
				"A curated set of popular algorithms used as a tool for solving various challenging problems in DSA using JS.",
			languages: [
				{
					name: "JavaScript",
					iconifyClass: "logos-javascript",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/AlgoJS",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "8",
			name: "30 Days of React",
			url: "https://github.com/suntansoker/30-Days-Of-React",
			description:
				"A step by step tutorial on learning the workings of React, covering topics like props to the state management in 30 days.",
			languages: [
				{
					name: "HTML5",
					iconifyClass: "logos-html-5",
				},
				{
					name: "CSS3",
					iconifyClass: "logos-css-3",
				},
				{
					name: "JavaScript",
					iconifyClass: "logos-javascript",
				},
				{
					name: "ReactJS",
					iconifyClass: "logos-react",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/30-Days-Of-React",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "9",
			name: "30 Days of Javascript",
			url: "https://github.com/suntansoker/30-Days-Of-JavaScript",
			description:
				"A step by step tutorial on learning the workings of Javascript, covering topics like variables to functions in 30 days.",
			languages: [
				{
					name: "HTML5",
					iconifyClass: "logos-html-5",
				},
				{
					name: "JavaScript",
					iconifyClass: "logos-javascript",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/30-Days-Of-JavaScript",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "10",
			name: "Angular PWA",
			url: "https://github.com/suntansoker/angular_pwa",
			description:
				"A simple angular component to demonstrate the workings a basic PWA and how it can be used directly from a website.",
			languages: [
				{
					name: "TypeScript",
					iconifyClass: "skill-icons:typescript",
				},
				{
					name: "Angular",
					iconifyClass: "logos-angular-icon",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/angular_pwa",
					iconifyClass: "ri:github-fill",
				},
			],
		},
		{
			id: "11",
			name: "Angular Ngrx",
			url: "https://github.com/suntansoker/angular_ngrx",
			description:
				"A simple angular component to demonstrate the workings a basic Ngrx and how it can be used for state management.",
			languages: [
				{
					name: "TypeScript",
					iconifyClass: "skill-icons:typescript",
				},
				{
					name: "Angular",
					iconifyClass: "logos-angular-icon",
				},
			],
			links: [
				{
					name: "Github",
					url: "https://github.com/suntansoker/angular_ngrx",
					iconifyClass: "ri:github-fill",
				},
			],
		},
	],
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	degrees,
	experience,
	projectsHeader,
	contactPageData,
	projects,
	competitives,
};
