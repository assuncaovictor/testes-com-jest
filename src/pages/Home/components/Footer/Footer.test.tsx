import { render, screen } from "@testing-library/react";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { RecoilRoot } from "recoil";
import Footer from ".";

jest.mock("../../state/hooks/useParticipantsList", () => ({
	useParticipantsList: jest.fn(),
}));

describe("Rodapé sem usuários suficientes", () => {
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

describe("Rodapé com usuários suficientes", () => {
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
});
