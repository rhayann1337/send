import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";

const mockedHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

test("should render page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Cadastro de Administrador/i);
  expect(linkElement).toBeInTheDocument();
});

test("should redirect to register admin", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Cadastro de Administrador/i);
  expect(linkElement).toBeInTheDocument();
  linkElement.click();
  expect(mockedHistoryPush).toBeCalledWith("/cadastro-adm");
});

test("should redirect to register employee", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Cadastro de colaborador/i);
  expect(linkElement).toBeInTheDocument();
  linkElement.click();
  expect(mockedHistoryPush).toBeCalledWith("/cadastro-colaborador");
});

test("should redirect to register user", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Cadastro de usuario/i);
  expect(linkElement).toBeInTheDocument();
  linkElement.click();
  expect(mockedHistoryPush).toBeCalledWith("/cadastro");
});

test("should open modal send email", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Enviar/i);
  expect(linkElement).toBeInTheDocument();
  linkElement.click();

  const content = screen.getByText(/Cancelar/i);
  expect(content).toBeInTheDocument();

  content.click();

  expect(content).not.toBeInTheDocument();
});

test("should open modal send email scheduled", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Emails agendados/i);
  expect(linkElement).toBeInTheDocument();
  linkElement.click();

  const content = screen.getByText(/Cancelar/i);
  expect(content).toBeInTheDocument();

  content.click();

  expect(content).not.toBeInTheDocument();
});

test("should open modal contact", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Contatos/i);
  expect(linkElement).toBeInTheDocument();
  linkElement.click();

  const content = screen.getByText(/Cancelar/i);
  expect(content).toBeInTheDocument();

  content.click();

  expect(content).not.toBeInTheDocument();
});
