import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Form from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const response = { nome: "Tiago Enriquez Tachy", cpf: "025.316.805-86" };
const numero = 2;
const server = setupServer(
  rest.get(`process.env.API_URL/${numero}`, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


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

test('calls api on button click and update table', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>);
  
  const button = screen.getByRole("button");
  fireEvent.click(button)
  button = await screen.findByText(response.data);
  expect(button).toBeInTheDocument();
});