import React from "react";
import "./ExperienceCard.css";
import { motion } from "framer-motion";

function ExperienceCard(props) {
	const experience = props.experience;
	const theme = props.theme;
	return (
		<div
			className="experience-card"
			style={{
				border: `1px solid ${experience["color"]}`,
				backgroundColor: theme.palette.imageDark,
			}}
		>
			<motion.div
				initial={{ opacity: 0.5, rotateY: -90 }}
				whileInView={{ opacity: 1, rotateY: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<div className="experience-card-logo-div">
					<img
						className="experience-card-logo"
						src={require(`../../assets/images/${experience["logo_path"]}`)}
						alt=""
					/>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				viewport={{ once: true }}
			>
				<div className="experience-card-body-div">
					<div className="experience-card-header-div">
						<div className="experience-card-heading-left">
							<h3
								className="experience-card-title"
								style={{ color: theme.palette.text.primary }}
							>
								{experience["title"]}
							</h3>
							<p
								className="experience-card-company"
								style={{ color: theme.palette.secondaryText }}
							>
								<a
									href={experience["company_url"]}
									target="_blank"
									rel="noopener noreferrer"
								>
									{experience["company"]}
								</a>
							</p>
						</div>
						<div className="experience-card-heading-right">
							<p
								className="experience-card-duration"
								style={{ color: theme.palette.secondaryText }}
							>
								{experience["duration"]}
							</p>
							<p
								className="experience-card-location"
								style={{ color: theme.palette.secondaryText }}
							>
								{experience["location"]}
							</p>
						</div>
					</div>
					<p
						className="experience-card-description"
						style={{ color: theme.palette.text.primary }}
					>
						{experience["description"]}
					</p>
				</div>
			</motion.div>
		</div>
	);
}

export default ExperienceCard;
