import React, { useState } from "react";
import "./Header.css";
// import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import { motion } from "framer-motion";

const Header = (props) => {
	const theme = props.theme;

	const styles = style({
		cursor: "pointer",
		height: "45px",
		width: "45px",
		marginRight: "5px",
		marginLeft: "15px",
		paddingTop: "5px",
		borderRadius: "50%",
		border: "none",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor:
			props.theme.palette.mode === "light" ? "#FFA500" : "#292C3F",
		outline: "none",
		transition: "all 0.2s ease-in-out",
		":hover": {
			boxShadow: `0 3px 8px ${
				props.theme.palette.mode === "light" ? "#F7D774" : "#646464"
			}`,
		},
	});

	const link = settings.isSplash ? "/splash" : "home";

	const [currTheme, setCurrTheme] = useState(props.theme.palette.mode);

	function changeTheme() {
		if (currTheme === "light") {
			props.setTheme("dark");
			localStorage.setItem("theme", "dark");
			setCurrTheme("dark");
		} else {
			props.setTheme("light");
			localStorage.setItem("theme", "light");
			setCurrTheme("light");
		}
	}

	const icon =
		props.theme.palette.mode === "dark" ? (
			<HiMoon
				strokeWidth={1}
				size={20}
				color={props.theme.palette.mode === "light" ? "#F9F4F1" : "#A7A7A7"}
			/>
		) : (
			<CgSun
				strokeWidth={1}
				size={20}
				color={props.theme.palette.mode === "light" ? "#F9F4F1" : "#A7A7A7"}
			/>
		);

	return (
		<motion.div
			initial={{ y: "20px", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<header className="header">
				<NavLink to={link} tag={Link} className="logo">
					<span style={{ color: theme.palette.text.primary }}></span>
					<span
						className="logo-name"
						style={{ color: theme.palette.text.primary }}
					>
						{greeting.logo_name}
					</span>
					<span style={{ color: theme.palette.text.primary }}></span>
				</NavLink>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn">
					<span className="navicon"></span>
				</label>
				<ul className="menu">
					<li>
						<NavLink
							className="homei"
							to="/home"
							tag={Link}
							activestyle={{ fontWeight: "bold" }}
							style={{ borderRadius: 5, color: theme.palette.text.primary }}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className="ec"
							to="/education"
							tag={Link}
							activestyle={{ fontWeight: "bold" }}
							style={{ borderRadius: 5, color: theme.palette.text.primary }}
						>
							Education
						</NavLink>
					</li>
					<li>
						<NavLink
							className="xp"
							to="/experience"
							tag={Link}
							activestyle={{ fontWeight: "bold" }}
							style={{ borderRadius: 5, color: theme.palette.text.primary }}
						>
							Experience
						</NavLink>
					</li>
					<li>
						<NavLink
							className="projects"
							to="/projects"
							tag={Link}
							activestyle={{ fontWeight: "bold" }}
							style={{ borderRadius: 5, color: theme.palette.text.primary }}
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							className="cr"
							to="/contact"
							tag={Link}
							activestyle={{ fontWeight: "bold" }}
							style={{ borderRadius: 5, color: theme.palette.text.primary }}
						>
							Contact and Resume
						</NavLink>
					</li>
					<button {...styles} onClick={changeTheme}>
						{icon}
					</button>
				</ul>
			</header>
		</motion.div>
	);
};

export default Header;
