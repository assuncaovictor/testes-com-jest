import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Form from ".";
import { act } from "react-dom/test-utils";
import ModelTest from "../../../../tests/Model";

describe("Comportamento do Form", () => {
	test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
		render(
			<ModelTest>
				<Form />
			</ModelTest>
		);

		const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
		const botao = screen.getByRole("button");

		expect(input).toBeInTheDocument();
		expect(botao).toBeDisabled();
	});

	test("Adicionar um participante caso exista um nome preenchido", () => {
		render(
			<ModelTest>
				<Form />
			</ModelTest>
		);

		const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
		const botao = screen.getByRole("button");

		//inserir um valor no input
		fireEvent.change(input, {
			target: {
				value: "Victor Assunção Melo",
			},
		});

		//clicar no botão
		fireEvent.click(botao);

		//garantir que o input esteja com o foco ativo
		expect(input).toHaveFocus();

		//garantir que o input não tenha um valor
		expect(input).toHaveValue("");
	});

	test("Nomes duplicados não podem ser adicionados na lista", () => {
		render(
			<ModelTest>
				<Form />
			</ModelTest>
		);

		const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
		const botao = screen.getByRole("button");

		fireEvent.change(input, {
			target: {
				value: "Victor Assunção Melo",
			},
		});
		fireEvent.click(botao);

		fireEvent.change(input, {
			target: {
				value: "Victor Assunção Melo",
			},
		});
		fireEvent.click(botao);

		const errorMessage = screen.getByRole("alert");

		expect(errorMessage.textContent).toBe("Esse nome já foi cadastrado!");
	});

	test("A mensagem de erro deve sumir apos os timers", () => {
		jest.useFakeTimers();

		render(
			<ModelTest>
				<Form />
			</ModelTest>
		);

		const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
		const botao = screen.getByRole("button");

		fireEvent.change(input, {
			target: {
				value: "Victor Assunção Melo",
			},
		});
		fireEvent.click(botao);

		fireEvent.change(input, {
			target: {
				value: "Victor Assunção Melo",
			},
		});
		fireEvent.click(botao);

		let errorMessage = screen.queryByRole("alert");

		expect(errorMessage).toBeInTheDocument();

		act(() => {
			jest.runAllTimers();
		});

		errorMessage = screen.queryByRole("alert");
		expect(errorMessage).toBeNull();
	});
});
