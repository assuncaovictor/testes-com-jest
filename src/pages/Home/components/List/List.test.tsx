import React from "react";
import { render, screen } from "@testing-library/react";
import List from ".";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock("../../state/hooks/useParticipantsList", () => ({
	useParticipantsList: jest.fn(),
}));

describe("Uma lista de participantes vazia", () => {
	beforeEach(() => (useParticipantsList as jest.Mock).mockReturnValue([]));

	test("deve ser renderizada sem elementos", () => {
		render(
			<RecoilRoot>
				<List />
			</RecoilRoot>
		);

		const items = screen.queryAllByRole("listitem");
		expect(items).toHaveLength(0);
	});
});

describe("Uma lista de participantes preenchida", () => {
	const names = ["Victor", "Thais"];
	beforeEach(() => (useParticipantsList as jest.Mock).mockReturnValue(names));

	test("Deve ser renderizada com elementos", () => {
		render(
			<RecoilRoot>
				<List />
			</RecoilRoot>
		);

		const items = screen.queryAllByRole("listitem");
		expect(items).toHaveLength(names.length);
	});
});
