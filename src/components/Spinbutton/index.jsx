import PropTypes from 'prop-types';
import { SpinbuttonStyled } from './style';

export default function Spinbutton({ placeholder }) {
  return(
    <SpinbuttonStyled
      type="number"
      placeholder={placeholder}
    />
  );
}

Spinbutton.propTypes = {
  placeholder: PropTypes.string.isRequired,
}