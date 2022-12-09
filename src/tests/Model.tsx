import { OnlyChildren } from "../interface/children";
import { ThemeProvider } from "@mui/system";
import { RecoilRoot } from "recoil";
import { theme } from "../theme";

const ModelTest = ({ children }: OnlyChildren) => (
	<ThemeProvider theme={theme}>
		<RecoilRoot>{children}</RecoilRoot>
	</ThemeProvider>
);

export default ModelTest;
