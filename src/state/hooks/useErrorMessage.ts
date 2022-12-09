import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

const useErrorMessage = () => {
	const message = useRecoilValue(erroState);
	return message;
};

export { useErrorMessage };
