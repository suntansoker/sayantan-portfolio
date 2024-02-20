import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import { Fade } from "react-reveal";
import { socialMediaLinks, projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import Button from "../../components/button/Button.js";
// import { style } from "glamor";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

function Projects(props) {
	const theme = useTheme();

	// const styles = style({
	// 	backgroundColor: `${theme.palette.accentBright}`,
	// 	":hover": {
	// 		boxShadow: `0 5px 15px ${theme.palette.accentBright}`,
	// 	},
	// });

	return (
		<div className="projects-main">
			{/* <Header theme={theme} setTheme={props.setTheme} /> */}
			<motion.div
				initial={{ y: "40px", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<div className="basic-projects">
					<div className="projects-heading-div">
						<div className="projects-heading-img-div">
							<ProjectsImg theme={theme} />
						</div>
						<div className="projects-heading-text-div">
							<h1
								className="projects-heading-text"
								style={{ color: theme.palette.text }}
							>
								{projectsHeader.title}
							</h1>
							<p
								className="projects-header-detail-text subTitle"
								style={{ color: theme.palette.secondaryText }}
							>
								{projectsHeader["description"]}
							</p>
						</div>
					</div>
				</div>
			</motion.div>

			<div className="repo-cards-div-main">
				{projects.data.map((repo, id) => {
					return <ProjectCard key={id} repo={repo} theme={theme} />;
				})}
			</div>
			<motion.div
				initial={{ y: "40px", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				viewport={{ once: true }}
			>
				<Button
					text={"More Projects"}
					className="project-button"
					href={socialMediaLinks.github}
					newTab={true}
					theme={theme}
				/>
			</motion.div>

			{/* <Footer theme={props.theme} onToggle={props.onToggle} /> */}
		</div>
	);
}

export default Projects;
