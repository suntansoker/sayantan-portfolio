import React, { useState, useMemo } from "react";
import "./App.css";
// import Main from "./containers/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themes } from "./theme";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Default to dark theme

	// Define Mui themes based on the presets from theme.js
	const muiTheme = useMemo(() => createTheme(themes(theme)), [theme]);

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<Header theme={muiTheme} setTheme={setTheme} />
			<Outlet />
			{/* <Footer /> */}
		</ThemeProvider>
	);
}

export default App;
