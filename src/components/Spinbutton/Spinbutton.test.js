import { render, screen } from '@testing-library/react';
import Spinbutton from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a spinbutton', () => {

  function ola() {
    console.log(Ola);
  }

  render(
    <ThemeProvider theme={theme}>
      <Spinbutton
        onKeyPress={ola}
        onChange={ola}
        placeholder="Digite a quantidade de pessoas"
      />
    </ThemeProvider>);

  expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Digite a quantidade de pessoas")).toBeInTheDocument();

});