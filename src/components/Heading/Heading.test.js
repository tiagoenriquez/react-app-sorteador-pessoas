import { render, screen } from '@testing-library/react';
import Heading from './index';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

test('renders a heading', () => {

  render(
    <ThemeProvider theme={theme}>
      <Heading>
        Sorteador de Pessoas
      </Heading>
    </ThemeProvider>
  );

  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByText("Sorteador de Pessoas")).toBeInTheDocument();

});