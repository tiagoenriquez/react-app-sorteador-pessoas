import { render, screen } from '@testing-library/react';
import Form from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a form', () => {

  render(
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>);

  expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Digite a quantidade de pessoas")).toBeInTheDocument();
  expect(screen.getByText("Listar as pessoas")).toBeInTheDocument();
});