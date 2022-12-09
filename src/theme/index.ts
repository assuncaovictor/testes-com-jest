import { createTheme } from "@mui/material";

import palette from "./palette";

import button from "./components/button";
import container from "./components/container";
import input from "./components/input";
import typography from "./components/typography";

const theme = createTheme({
	components: {
		...button,
		...container,
		...input,
		...typography,
	},

	palette: palette,
});

export { theme };
