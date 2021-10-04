import PropTypes from 'prop-types';
import { THeadStyled } from './style';
import { RowStyled } from '../style';

export default function THead({ titulos }) {
  return(
    <THeadStyled>
      <tr>
        {
          titulos.map((titulo) =>
            <RowStyled key={titulo.nome}>
              <b>{titulo.nome}</b>
            </RowStyled>
          )
        }
      </tr>
    </THeadStyled>
  );
}

THead.propTypes = {
  titulos: PropTypes.array.isRequired
}