import PropTypes from 'prop-types';
import { TBodyStyled } from './style';
import { RowStyled } from '../style';

export default function TBody({ pessoas }) {

  function obterCpf(cpfEntrada) {
    let cpfRetornado = "";
    for(let i = 0; i < cpfEntrada.length; i++) {
      cpfRetornado += cpfEntrada[i];
      if(i === 2 || i === 5) {
        cpfRetornado += ".";
      }
      if(i === 8) {
        cpfRetornado += "-";
      }
    }
    return cpfRetornado;
  }

  function obterRg(rgEntrada) {
    let rgRetornado = "";
    for(let i = 0; i < rgEntrada.length; i++) {
      rgRetornado += rgEntrada[i];
      if(i === 1 || i === 4) {
        rgRetornado += ".";
      }
      if(i === 7) {
        rgRetornado += "-";
      }
    }
    return rgRetornado;
  }

  function obterTelefone(telefoneEntrada) {
    return `${telefoneEntrada.substring(0, 5)}-${telefoneEntrada.substring(5, 9)}`;
  }

  return(
    <TBodyStyled>
      {
        pessoas.map((pessoa) =>
          <tr key={pessoa.cpf}>
            <RowStyled>{pessoa.nome}</RowStyled>
            <RowStyled>{obterCpf(pessoa.cpf)}</RowStyled>
            <RowStyled>{obterRg(pessoa.rg)}</RowStyled>
            <RowStyled>{obterTelefone(pessoa.telefone)}</RowStyled>
            <RowStyled>{pessoa.usuario}</RowStyled>
            <RowStyled>{pessoa.email}</RowStyled>
            <RowStyled>{pessoa.senha}</RowStyled>
          </tr>
        )
      }
    </TBodyStyled>
  );
}

TBody.propTypes = {
  pessoas: PropTypes.array.isRequired
}