import { useRecoilValue } from "recoil";
import { listOfParticipantsState } from "../atom";

const useParticipantsList = () => {
	return useRecoilValue(listOfParticipantsState);
};

export { useParticipantsList };
