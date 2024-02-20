import React from "react";
import "./Footer.css";
// import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
	return (
		<div className="footer-div">
			<p
				className="footer-text"
				style={{ color: props.theme.palette.text.primary }}
			>
				Made with <span role="img">❤️</span> by {greeting.title2}
			</p>
		</div>
	);
}
