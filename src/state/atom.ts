import { atom } from "recoil";

const listOfParticipantsState = atom<string[]>({
	key: "listOfParticipants",
	default: [],
});

const erroState = atom<string>({
	key: "erroState",
	default: "",
});

export { erroState, listOfParticipantsState };
