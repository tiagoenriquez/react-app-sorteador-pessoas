import { useState, useEffect } from 'react';
import Spinbutton from '../Spinbutton';
import Button from '../Button';
import Table from '../Table';
import { getPessoas } from '../../providers/PessoasProvider';
import { FormStyled } from './style';

export default function Form() {

  const [numero, setNumero] = useState(0);
  const [pessoas, setPessoas] = useState(null);
  const titulos = [{
    nome: "Nome"
  }, {
    nome: "CPF"
  }, {
    nome: "RG"
  }, {
    nome: "Telefone"
  }, {
    nome: "Usuário"
  }, {
    nome: "E-mail"
  }, {
    nome: "Senha"
  }];

  async function listarPessoas() {
    try {
      let response = null;
      if(typeof numero === "number") {
        response = await getPessoas(numero);
      } else {
        response = await getPessoas(numero.target.valueAsNumber);
      }
      setPessoas(response.data);
    } catch(err) {
      setPessoas(null);
    }
  }

  function pressionarEnter(event) {
    if(event.key === "Enter") {
      setNumero(event);
      listarPessoas();
    }
  }

  useEffect(() => {
    console.log("");
  }, [pessoas]);

  return(
    <div>
      <FormStyled>
        <Spinbutton
          onKeyPress={(event) => pressionarEnter(event)}
          onChange={(event) => setNumero(event)}
          placeholder="Digite a quantidade de pessoas"
        />
        <Button onClick={listarPessoas}>
          Listar as pessoas
        </Button>
      </FormStyled>
      {
        pessoas &&
          <Table
            titulos={titulos}
            pessoas={pessoas}
          />
      }
    </div>
  );
}