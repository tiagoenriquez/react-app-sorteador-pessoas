import { render, screen } from '@testing-library/react';
import THead from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

test('renders a table head', () => {

  render(
    <ThemeProvider theme={theme}>
      <THead titulos={[{nome: "Nome"}, {nome: "CPF"}]} />
    </ThemeProvider>
  );

  expect(screen.getByText("Nome")).toBeInTheDocument();
  expect(screen.getByText("CPF")).toBeInTheDocument();

});