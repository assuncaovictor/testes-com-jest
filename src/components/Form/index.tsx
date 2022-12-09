import React from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";

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
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Insira os nomes dos participantes"
				value={name}
				onChange={(e) => setName(e.target.value)}
				ref={inputRef}
			/>
			<button disabled={!name} type="submit">
				Adicionar
			</button>

			{errorMessage && <p role="alert">{errorMessage}</p>}
		</form>
	);
};

export default Form;
