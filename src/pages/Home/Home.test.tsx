import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Home from ".";

jest.mock("react-router-dom", () => ({
	useNavigate: () => jest.fn(),
}));

describe("A página de home", () => {
	test("deve ser renderizada corretamente", () => {
		const { container } = render(
			<RecoilRoot>
				<Home />
			</RecoilRoot>
		);

		expect(container).toMatchSnapshot();
	});
});
