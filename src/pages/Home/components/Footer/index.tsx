import React from "react";
import { Button, Box, Stack } from "@mui/material";
import { PlayCircle } from "phosphor-react";
// import { Link } from "react-router-dom";

import { useParticipantsList } from "../../state/hooks/useParticipantsList";

import sacolas from "../../../../assets/img/sacolas.png";

const Footer = () => {
	const names = useParticipantsList();
	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Button
				// component={Link}
				disabled={names.length < 3}
				// to="/sort"
				startIcon={<PlayCircle size={24} weight="bold" color="#fff" />}
				variant="contained"
				sx={{ width: 250 }}
			>
				Iniciar brincadeira
			</Button>

			<Box component="img" src={sacolas} />
		</Stack>
	);
};

export default Footer;
