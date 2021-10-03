import PropTypes from 'prop-types';
import THead from './THead';
import TBody from './TBody';
import { TableStyled } from './style';

export default function Table({ titulos, pessoas }) {
  return(
    <TableStyled>
      <THead titulos={titulos} />
      <TBody pessoas={pessoas} />
    </TableStyled>
  );
}

Table.propTypes = {
  titulos: PropTypes.array.isRequired,
  pessoas: PropTypes.array.isRequired,
}