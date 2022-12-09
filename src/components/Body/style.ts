import { styled } from "@mui/material/styles";
import { Paper as MuiPaper, Stack } from "@mui/material";

const Body = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	height: "100vh",
	paddingTop: 123,
}));

const Paper = styled(MuiPaper)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	border: "2px solid #000000",
	borderTopLeftRadius: 64,
	borderTopRightRadius: 64,
	height: "100%",
	marginTop: "-2rem",
}));

export { Body, Paper };
