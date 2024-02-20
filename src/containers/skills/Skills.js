import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
// import { Fade } from "react-reveal";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

function Skills() {
	const theme = useTheme();
	return (
		<div className="main" id="skills">
			<motion.div
				initial={{ y: "20px", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				viewport={{ once: true }}
			>
				<div className="skills-header-div">
					<h1
						className="skills-header"
						style={{ color: theme.palette.text.primary }}
					>
						What I Do?
					</h1>
				</div>
			</motion.div>
			<SkillSection theme={theme} />
		</div>
	);
}

export default Skills;
