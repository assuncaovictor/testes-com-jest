import { Stack, TextField } from "@mui/material";
import React from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";
import { Button } from "./style";

const Form = () => {
	const [name, setName] = React.useState("");

	const inputRef = React.useRef<HTMLInputElement>(null);

	const add = useAddParticipant();
	const errorMessage = useErrorMessage();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		add(name);
		setName("");

		inputRef.current?.focus();
	};

	return (
		<Stack component="form" onSubmit={handleSubmit} direction="row" width="100%" alignItems="flex-start">
			<TextField
				type="text"
				placeholder="Insira os nomes dos participantes"
				value={name}
				onChange={(e) => setName(e.target.value)}
				inputRef={inputRef}
				color="secondary"
				error={errorMessage.length > 0}
				helperText={errorMessage}
			/>

			<Button disabled={!name} type="submit" variant="contained">
				Adicionar
			</Button>
		</Stack>
	);
};

export default Form;
