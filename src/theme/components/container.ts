import { Theme } from "@mui/material";

const container: Theme = {
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					margin: "0 auto",
					maxWidth: `726px !important`,
				},
			},
		},
	},
} as Theme;

export default container.components;
