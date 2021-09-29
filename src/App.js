import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Main } from './pages';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
