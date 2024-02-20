import { amber, deepOrange, grey } from "@mui/material/colors";

export const themes = (mode) => ({
	components: {
		accordion: {
			expandMargin: "1px 0",
		},
	},
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
					primary: amber,
					divider: "#8DC4E0",
					text: {
						primary: "#343434",
						secondary: grey[800],
					},
					body: "#FFFFFF",
					dark: "#000000",
					secondaryText: "#7F8DAA",
					// accentColor: "#E3405F",
					accentColor: "#3C98C3",
					// accentBright: "#FC1056",
					accentBright: "#8DC4E0",
					projectCard: "#DCE4F2",
					skinColor: "#F7B799",
					skinColor2: "#FCB696",
					imageDark: "#dce4f2",
					imageClothes: "#dce4f2",
					avatarMisc: "#e9ecf2",
					avatarShoes: "#ccd2e3",
			  }
			: {
					// palette values for dark mode
					primary: deepOrange,
					divider: "#000000",
					background: {
						default: grey[900],
						paper: grey[800],
					},
					text: {
						primary: "#fff",
						secondary: grey[500],
					},
					body: "#1D1D1D",
					dark: "#000000",
					secondaryText: "#8D8D8D",
					// accentColor: "#E3405F",
					accentColor: "#3C98C3",
					// accentBright: "#FC1056",
					accentBright: "#8DC4E0",
					projectCard: "#292A2D",
					skinColor: "#F7B799",
					skinColor2: "#FCB696",
					imageDark: "#292A2D",
					imageClothes: "#000000",
					avatarMisc: "#212121",
					avatarShoes: "#2B2B2B",
			  }),
	},
});
