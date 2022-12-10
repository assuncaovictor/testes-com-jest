import { Theme } from "@mui/material";

const list: Theme = {
	components: {
		MuiListItem: {
			defaultProps: {
				role: "listitem",
			},
		},
	},
} as Theme;

export default list.components;
