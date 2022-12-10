import React from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import List from "./components/List";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Home = () => {
	return (
		<Stack my={8} gap={4}>
			<Typography color="primary" variant="h1">
				Vamos começar!
			</Typography>

			<Form />
			<List />
			<Footer />
		</Stack>
	);
};

export default Home;
