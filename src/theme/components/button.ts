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
					fontWeight: 600,
					height: 56,
					textTransform: "none",

					":hover": {
						backgroundColor: theme.palette.primary.main,
					},

					":disabled": {
						boxShadow: "2px 2px 0px #000000",
					},

					[theme.breakpoints.down("md")]: {
						maxWidth: 155,
					},
				}),
			},
		},
	},
} as Theme;

export default button.components;
