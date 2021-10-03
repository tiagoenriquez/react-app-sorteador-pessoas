import PropTypes from 'prop-types';
import { SpinbuttonStyled } from './style';

export default function Spinbutton({ onKeyPress, onChange, placeholder }) {
  return(
    <SpinbuttonStyled
      type="number"
      onKeyPress={onKeyPress}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

Spinbutton.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}