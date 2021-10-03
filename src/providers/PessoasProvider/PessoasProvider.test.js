import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getPessoas } from './index';

const response = { teste: "teste" };
const numero = 2;
const server = setupServer(
  rest.get(`https://safe-headland-22590.herokuapp.com/lista/${numero}`, (_req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('convert json response into objects', async() => {
  expect(await getPessoas(numero)).toStrictEqual(response);
});