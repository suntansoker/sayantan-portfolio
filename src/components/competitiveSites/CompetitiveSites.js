import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";

function CompetitiveSites(props) {
	return (
		<div className="competitive-sites-main-div">
			<ul className="dev-icons">
				{props.logos.map((logo) => {
					return (
						<OverlayTrigger
							key={logo.siteName}
							placement={"top"}
							style={{ marginBottom: "5px" }}
							overlay={
								<Tooltip id={`tooltip-top`}>
									<strong>{logo.siteName}</strong>
								</Tooltip>
							}
						>
							<li className="competitive-sites-inline" name={logo.siteName}>
								<a
									href={logo.profileLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon icon={logo.iconifyClassname} color={logo.style.color} />
								</a>
							</li>
						</OverlayTrigger>
					);
				})}
			</ul>
		</div>
	);
}

export default CompetitiveSites;
