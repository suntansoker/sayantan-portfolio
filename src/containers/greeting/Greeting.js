import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
// import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
// import { style } from "glamor";
import { useTheme } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Greeting = () => {
	const theme = useTheme();

	const [skill_text] = useTypewriter({
		words: greeting.subTitle,
		loop: 2,
		typeSpeed: 150,
		delaySpeed: 90,
		deleteSpeed: 120,
	});

	// console.log(theme);
	// const history = useHistory();

	// const styles = style({
	// 	backgroundColor: `${theme.palette.accentBright}`,
	// 	":hover": {
	// 		boxShadow: `0 5px 15px ${theme.palette.accentBright}`,
	// 	},
	// });

	return (
		<motion.div
			initial={{ y: "40px", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<div className="greet-main" id="greeting">
				<div className="greeting-main">
					<div className="greeting-text-div">
						<div>
							<h1 className="greeting-text">{greeting.title}</h1>
							<p
								className="greeting-text-p subTitle"
								style={{ color: theme.palette.secondaryText }}
							>
								<span>I'm </span>
								<span style={{ color: theme.palette.accentColor }}>
									{greeting.full_name}.{"\n"}
								</span>
								<span>I'm a</span>
								<span style={{ color: theme.palette.accentColor }}>
									{skill_text}
								</span>
								<span style={{ color: theme.palette.secondaryText }}>
									<Cursor cursorStyle="_" />
								</span>
								<br />
								<br />
								<span style={{ color: theme.palette.secondaryText }}>
									An enthusiastic entity who always finds joy in working on
									end-to-end projects that build scalable and sustainable social
									and technical systems to make a difference!!!
								</span>
							</p>
							<SocialMedia />
							{/* <div className="portfolio-repo-btn-div">
              <button
                {...styles}
                className="button"
                onClick={() => {
                  history.push("/contact");
                }}
              >
                Contact Me
              </button>
            </div> */}
						</div>
					</div>
					<div className="greeting-image-div">
						<FeelingProud theme={theme} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Greeting;
