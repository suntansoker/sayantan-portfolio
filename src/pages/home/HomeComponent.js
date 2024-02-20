import React from "react";
// import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
// import Footer from "../../components/footer/Footer";
// import { useTheme } from "@mui/material";

const Home = () => {
	// const theme = useTheme();
	return (
		<div>
			{/* <Header theme={props.theme} setTheme={props.setTheme} /> */}
			<Greeting />
			<Skills />
			{/* <h1>Hello there</h1> */}
		</div>
	);
};

export default Home;
