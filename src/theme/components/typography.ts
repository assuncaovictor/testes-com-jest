import { Theme } from "@mui/material";

const typography: Theme = {
	components: {
		MuiTypography: {
			styleOverrides: {
				h1: ({ theme }) => ({
					fontSize: 16,
					fontWeight: 600,

					[theme.breakpoints.up("sm")]: {
						fontSize: 32,
					},
				}),

				root: {
					textAlign: "center",
				},
			},
		},
	},
} as Theme;

export default typography.components;
