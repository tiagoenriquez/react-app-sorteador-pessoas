import Spinbutton from '../Spinbutton';
import Button from '../Button';
import { getPessoas } from '../../providers/PessoasProvider';

export default function Form() {

  function listar() {
    console.log("Não há pessoas para serem listadas.");
  }

  return(
    <div>
      <Spinbutton placeholder="Digite a quantidade de pessoas" />
      <Button onClick={listar}>
        Listar as pessoas
      </Button>
    </div>
  );
}