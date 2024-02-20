import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
// import { Fade } from "react-reveal";
import { style } from "glamor";
import { motion } from "framer-motion";

export default function ProjectCard({ repo, theme }) {
	// console.log(repo);
	function openRepoinNewTab(url) {
		var win = window.open(url, "_blank");
		win.focus();
	}

	const styles = style({
		color: "rgb(88, 96, 105)",
		backgroundColor: "rgb(255, 255, 255)",
		boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
		padding: "2rem",
		cursor: "pointer",
		borderRadius: "5px",
		height: "100%",
		transition: "all 0.2s ease-in-out",
		":hover": {
			boxShadow: `${theme.palette.imageDark} 0 2px 15px`,
		},
	});

	return (
		<motion.div
			initial={{ y: "40px", opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			viewport={{ once: true }}
		>
			<div>
				<div
					{...styles}
					key={repo.id}
					onClick={() => openRepoinNewTab(repo.url)}
					style={{ backgroundColor: theme.palette.projectCard }}
				>
					<div className="repo-name-div">
						<p
							className="repo-name"
							style={{ color: theme.palette.text.primary }}
						>
							{repo.name}
						</p>
					</div>
					<p
						className="repo-description"
						style={{ color: theme.palette.text.primary }}
					>
						{repo.description}
					</p>
					<div className="flexDiv">
						<div className="repo-details Leftitem">
							<ProjectLanguages logos={repo.languages} />
						</div>
						<div className="repo-details Rightitem">
							<ProjectLinks logos={repo.links} />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
