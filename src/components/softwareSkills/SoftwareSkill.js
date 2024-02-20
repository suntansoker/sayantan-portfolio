import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";

function SoftwareSkill(props) {
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons">
					{props.logos.map((logo) => {
						return (
							<OverlayTrigger
								key={logo.skillName}
								placement={"top"}
								overlay={
									<Tooltip id={`tooltip-top`}>
										<strong>{logo.skillName}</strong>
									</Tooltip>
								}
							>
								<li className="software-skill-inline" name={logo.skillName}>
									{logo.fontAwesomeClassname && (
										<Icon icon={logo.fontAwesomeClassname} style={logo.style} />
									)}
									{!logo.fontAwesomeClassname && logo.imageSrc && (
										<img
											className="skill-image"
											style={logo.style}
											src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
											alt={logo.skillName}
										/>
									)}
								</li>
							</OverlayTrigger>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default SoftwareSkill;
