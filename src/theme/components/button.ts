import { Theme } from "@mui/material";

const button: Theme = {
	components: {
		MuiButton: {
			styleOverrides: {
				containedPrimary: ({ theme }) => ({
					backgroundColor: theme.palette.secondary.main,
					border: "2px solid #000000",
					borderRadius: 99999,
					boxShadow: "2px 2px 0px #000000",

					":hover": {
						backgroundColor: theme.palette.primary.main,
					},
				}),
			},
		},
	},
} as Theme;

export default button.components;
