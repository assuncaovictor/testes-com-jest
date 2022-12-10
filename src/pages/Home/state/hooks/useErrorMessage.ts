import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

const useErrorMessage = () => {
	return useRecoilValue(erroState);
};

export { useErrorMessage };
