import { render, screen } from '@testing-library/react';
import TBody from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

test('renders a table', () => {

  const pessoas = [{
    nome: "Matheus Marins dos Santos",
    cpf: "939.598.390-38",
    rg: "5322769252",
    telefone: "991803427",
    usuario: "matheus-dos-santos0",
    email: "matheus.dos.santos0@teste.com",
    senha: "g]3Kp2!Ndm"
  }, {
    nome: "Fernanda Souza da Silva",
    cpf: "624.498.029-94",
    rg: "0213593023",
    telefone: "930148668",
    usuario: "fernanda-da-silva1",
    email: "fernanda.da.silva1@teste.com",
    senha: "1Col:6Qz#[CKLj"
  }];

  render(
    <ThemeProvider theme={theme}>
      <TBody pessoas={pessoas} />
    </ThemeProvider>
  );

  expect(screen.getByRole("rowgroup")).toBeInTheDocument();
  expect(screen.getAllByRole("row")).toHaveLength(2);
  expect(screen.getAllByRole("cell")).toHaveLength(14);

});