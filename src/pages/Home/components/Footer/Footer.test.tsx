import { fireEvent, render, screen } from "@testing-library/react";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { RecoilRoot } from "recoil";
import Footer from ".";

jest.mock("../../state/hooks/useParticipantsList", () => ({
	useParticipantsList: jest.fn(),
}));

describe("Quando não existem usuários suficientes", () => {
	beforeEach(() => (useParticipantsList as jest.Mock).mockReturnValue([]));

	test("O jogo não pode ser iniciado", () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>
		);

		const button = screen.getByText("Iniciar brincadeira");

		expect(button).toBeDisabled();
	});
});

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	useNavigate: () => mockNavigate,
}));

describe("Quando existem usuários suficientes", () => {
	const names = ["Ana", "Maria", "Joana"];
	beforeEach(() => (useParticipantsList as jest.Mock).mockReturnValue(names));

	test("O jogo pode ser iniciado", () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>
		);

		const button = screen.getByText("Iniciar brincadeira");

		expect(button).toBeEnabled();
	});

	test("deve redirectionar o usuário após clicar no botão", () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>
		);

		const button = screen.getByText("Iniciar brincadeira");

		fireEvent.click(button);

		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith("/sort");
	});
});
