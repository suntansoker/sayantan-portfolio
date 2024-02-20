import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faGoogle,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function socialMedia() {
	return (
		<div className="social-media-div">
			<a
				href={socialMediaLinks.linkedin}
				className="icon-button linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" />

				<span></span>
			</a>
			<a
				href={socialMediaLinks.github}
				className="icon-button github"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} className="fab fa-github" />

				<span></span>
			</a>
			<a
				href={`mailto:${socialMediaLinks.gmail}`}
				className="icon-button google"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGoogle} className="fab fa-google" />
				<span></span>
			</a>
			<a
				href={socialMediaLinks.youtube}
				className="icon-button youtube"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faYoutube} className="fab fa-youtube" />

				<span></span>
			</a>
		</div>
	);
}
