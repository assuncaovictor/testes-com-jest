import { Theme } from "@mui/material";

const input: Theme = {
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderTopLeftRadius: 9999,
					borderBottomLeftRadius: 9999,
					width: "100%",
				},
				notchedOutline: {
					borderBottom: "2px solid #000000",
					borderLeft: "2px solid #000000",
					borderTop: "2px solid #000000",
					boxShadow: "2px 2px 0px #000000",
				},
			},
		},

		MuiFormControl: {
			styleOverrides: {
				root: {
					width: "100%",
				},
			},
		},

		MuiFormHelperText: {
			defaultProps: {
				role: "alert",
			},
		},
	},
} as Theme;

export default input.components;
