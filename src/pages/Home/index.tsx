import React from "react";
import Form from "./components/Form";
import Typography from "@mui/material/Typography";
import { Stack, Button } from "@mui/material";
import { PlayCircle } from "phosphor-react";

const Home = () => {
	return (
		<>
			<Typography color="primary" variant="h1">
				Vamos começar!
			</Typography>
			<Form />

			<Stack>
				<Button startIcon={<PlayCircle size={24} weight="bold" color="#fff" />} variant="contained">
					Iniciar Brincadeira
				</Button>
			</Stack>
		</>
	);
};

export default Home;
