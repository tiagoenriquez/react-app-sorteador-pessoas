import api from '../../services/api';

export async function getPessoas(number) {
  return await api.get(`lista/${number}`);
}