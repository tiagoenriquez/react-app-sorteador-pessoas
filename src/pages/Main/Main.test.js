import { render, screen } from '@testing-library/react';
import Main from './index';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

test('renders the page', () => {
  render(
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByText("Sorteador de Pessoas")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Digite a quantidade de pessoas")).toBeInTheDocument();
  expect(screen.getByText("Listar as pessoas")).toBeInTheDocument();
});
