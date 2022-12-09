import { useSetRecoilState, useRecoilValue } from "recoil";
import { erroState, listOfParticipantsState } from "../atom";

const useAddParticipant = () => {
	const setList = useSetRecoilState(listOfParticipantsState);

	const list = useRecoilValue(listOfParticipantsState);
	const setErro = useSetRecoilState(erroState);

	return (name: string) => {
		if (list.includes(name)) {
			setErro("Esse nome já foi cadastrado!");

			setTimeout(() => {
				setErro("");
			}, 3000);

			return;
		}

		return setList((oldList) => [...oldList, name]);
	};
};

export { useAddParticipant };
