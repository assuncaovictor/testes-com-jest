import { ThemeProvider } from "@mui/system";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { theme } from "./theme";
import { routes } from "./config/routes";
import Body from "./components/Body";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<RecoilRoot>
					<Routes>
						<Route path="*" element={<Navigate to="/" />} />

						{routes.map(({ path, element }) => (
							<Route key={path} path={path} element={<Body>{element}</Body>}></Route>
						))}
					</Routes>
				</RecoilRoot>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
