import { render, screen } from '@testing-library/react';
import Button from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a button', () => {

  render(
    <ThemeProvider theme={theme}>
      <Button onClick={() => console.log("Voce clicou aqui.")}>
        Listar as pessoas
      </Button>
    </ThemeProvider>
  );

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByText("Listar as pessoas")).toBeInTheDocument();

});