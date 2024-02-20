import React from "react";

import Educations from "../../containers/education/Educations";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitives } from "../../portfolio";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

function Education(props) {
	const theme = useTheme();
	return (
		<div className="education-main">
			{/* <Header theme={props.theme} setTheme={props.setTheme} /> */}
			<motion.div
				initial={{ y: "40px", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<div className="basic-education">
					<div className="heading-div">
						<div className="heading-img-div">
							<EducationImg theme={theme.palette} />
						</div>
						<div className="heading-text-div">
							<h1
								className="heading-text"
								style={{ color: theme.palette.text }}
							>
								Education
							</h1>
							<h3
								className="heading-sub-text"
								style={{ color: theme.palette.text }}
							>
								Competitive Programming (Leetcode)
							</h3>
							<p
								className="competitive-header-detail-text subTitle"
								style={{ color: theme.palette.secondaryText }}
							>
								{competitives.text}
							</p>
							<CompetitiveSites logos={competitives.competitiveSites} />
						</div>
					</div>
					<br />
					<Educations theme={props.theme} />
					{/* <Certifications theme={props.theme} /> */}
				</div>
				{/* <Footer theme={props.theme} /> */}
			</motion.div>
		</div>
	);
}

export default Education;
