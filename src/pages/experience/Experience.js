import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
// import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import ExperienceImg from "./ExperienceImg";
import { useTheme } from "@mui/material";

function Experience(props) {
	const theme = useTheme();
	return (
		<div className="experience-main">
			{/* <Header theme={theme} setTheme={props.setTheme} /> */}
			<div className="basic-experience">
				<motion.div
					initial={{ y: "40px", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, ease: "easeInOut" }}
				>
					<div className="experience-heading-div">
						<div className="experience-heading-img-div">
							<ExperienceImg theme={theme} />
						</div>
						<div className="experience-heading-text-div">
							<h1
								className="experience-heading-text"
								style={{ color: theme.palette.text }}
							>
								{experience.title}
							</h1>
							<h3
								className="experience-heading-sub-text"
								style={{ color: theme.palette.text }}
							>
								{experience["subtitle"]}
							</h3>
							<p
								className="experience-header-detail-text subTitle"
								style={{ color: theme.palette.secondaryText }}
							>
								{experience["description"]}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			<ExperienceAccordion sections={experience["sections"]} theme={theme} />
			{/* <Footer theme={props.theme} onToggle={props.onToggle} /> */}
		</div>
	);
}

export default Experience;
