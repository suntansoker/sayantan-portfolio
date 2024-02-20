import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import DesignImg from "./DesignImg";
import { motion } from "framer-motion";

function GetSkillSvg(props) {
	if (props.fileName === "DataScienceImg")
		return <DataScienceImg theme={props.theme} />;
	else if (props.fileName === "FullStackImg")
		return <FullStackImg theme={props.theme} />;
	return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
	const theme = props.theme;
	return (
		<div>
			{skills.data.map((skill, i) => {
				return (
					<div key={i} className="skills-main-div">
						<motion.div
							initial={{ x: "-40px", opacity: 0.5 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, ease: "easeInOut" }}
							viewport={{ once: true }}
						>
							<div className="skills-image-div">
								<GetSkillSvg fileName={skill.fileName} theme={theme} />
							</div>
						</motion.div>

						<div className="skills-text-div">
							<motion.div
								initial={{ x: "40px", opacity: 0.5 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: "easeInOut" }}
								viewport={{ once: true }}
							>
								<h1 className="skills-heading" style={{ color: theme.text }}>
									{skill.title}
								</h1>
							</motion.div>
							<motion.div
								initial={{ x: "40px", opacity: 0.5 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: "easeInOut" }}
								viewport={{ once: true }}
							>
								<SoftwareSkill logos={skill.softwareSkills} />
							</motion.div>
							<motion.div
								initial={{ x: "40px", opacity: 0.5 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: "easeInOut" }}
								viewport={{ once: true }}
							>
								<div>
									{skill.skills.map((skillSentence, i) => {
										return (
											<p
												key={i}
												className="subTitle skills-text"
												style={{ color: theme.secondaryText }}
											>
												{skillSentence}
											</p>
										);
									})}
								</div>
							</motion.div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SkillSection;
