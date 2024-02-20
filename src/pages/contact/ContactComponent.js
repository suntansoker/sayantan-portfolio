import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import "./ContactComponent.css";
import { useTheme } from "@mui/material";
import { greeting, contactPageData } from "../../portfolio.js";
import { motion } from "framer-motion";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
function Contact() {
	const theme = useTheme();
	return (
		<motion.div
			initial={{ y: "40px", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<div className="contact-main">
				<div className="basic-contact">
					<div className="contact-heading-div">
						<motion.div
							initial={{ opacity: 0.5, rotateY: -45 }}
							animate={{ opacity: 1, rotateY: 0 }}
							transition={{ duration: 1 }}
						>
							<div className="contact-heading-img-div">
								<img
									src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
									alt=""
									className="img"
								/>
							</div>
						</motion.div>
						<div className="contact-heading-text-div">
							<h1
								className="contact-heading-text"
								style={{ color: theme.palette.text.primary }}
							>
								{ContactData["title"]}
							</h1>
							<p
								className="contact-header-detail-text subTitle"
								style={{ color: theme.palette.secondaryText }}
							>
								{ContactData["description"]}
							</p>
							<SocialMedia theme={theme} />
							<div className="resume-btn-div">
								<Button
									text="See My Resume"
									newTab={true}
									href={greeting.resumeLink}
									theme={theme}
								/>
							</div>
						</div>
					</div>

					<div className="blog-heading-div">
						<div className="blog-heading-text-div">
							<h1
								className="blog-heading-text"
								style={{ color: theme.palette.text.primary }}
							>
								{blogSection["title"]}
							</h1>
							<p
								className="blog-header-detail-text subTitle"
								style={{ color: theme.palette.secondaryText }}
							>
								{blogSection["subtitle"]}
							</p>
							<div className="blogsite-btn-div">
								<Button
									text="Visit My Twitter"
									newTab={true}
									href={blogSection.link}
									theme={theme}
								/>
							</div>
						</div>
						<div className="blog-heading-img-div">
							{/* <img
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
							<BlogsImg theme={theme} />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Contact;
