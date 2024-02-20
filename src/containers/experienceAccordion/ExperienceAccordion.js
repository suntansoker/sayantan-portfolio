import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { motion } from "framer-motion";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExperienceAccordion(props) {
	const theme = props.theme;
	const [expanded, setExpanded] = useState("panel0");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
		const targetAccordion = document.getElementById(panel);
		if (targetAccordion) {
			targetAccordion.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	};

	return (
		<motion.div
			initial={{ y: "40px", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<div className="experience-accord">
				{props.sections.map((section, index) => (
					<Accordion
						expanded={expanded === `panel${index}`}
						onChange={handleChange(`panel${index}`)}
						sx={{
							"&.Mui-expanded": {
								margin: theme.components.accordion.expandMargin,
							},
						}}
						key={index}
					>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>{section.title}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div className="accord-panel">
								{section.experiences.map((experience, expIndex) => (
									<ExperienceCard
										key={expIndex}
										experience={experience}
										theme={theme}
									/>
								))}
							</div>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</motion.div>
	);
}

export default ExperienceAccordion;
