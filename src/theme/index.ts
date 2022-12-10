import { createTheme } from "@mui/material";

import palette from "./palette";

import button from "./components/button";
import container from "./components/container";
import input from "./components/input";
import list from "./components/list";
import typography from "./components/typography";

const theme = createTheme({
	components: {
		...button,
		...container,
		...input,
		...list,
		...typography,
	},

	palette: palette,
});

export { theme };
