import { Container, Stack, Box } from "@mui/material";
import React from "react";
import { OnlyChildren } from "../../interface/children";
import { Body as BodyComponent, Paper } from "./style";

import logoGrande from "../../assets/img/logo.png";
import participante from "../../assets/img/participante.png";

const Body = ({ children }: OnlyChildren) => {
	return (
		<BodyComponent>
			<Container>
				<Stack alignItems="flex-start" justifyContent="space-between" direction="row">
					<Box component="img" src={logoGrande} />
					<Box component="img" src={participante} sx={{ zIndex: 10 }} />
				</Stack>
			</Container>

			<Paper>
				<Container>{children}</Container>
			</Paper>
		</BodyComponent>
	);
};

export default Body;
