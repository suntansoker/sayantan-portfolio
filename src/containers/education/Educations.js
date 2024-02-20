import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

function Educations(props) {
	const theme = useTheme();
	// const theme = props.theme;

	return (
		<div className="main" id="educations">
			<br />
			<motion.div
				initial={{ y: "20px", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				viewport={{ once: true }}
			>
				<div className="educations-header-div">
					<h1
						className="educations-header"
						style={{ color: theme.palette.text }}
					>
						Degrees Received
					</h1>
				</div>
			</motion.div>
			<div className="educations-body-div">
				{degrees.degrees.map((degree) => {
					return <DegreeCard key={degree.id} degree={degree} theme={theme} />;
				})}
			</div>
		</div>
	);
}

export default Educations;
