import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export default function Button({
  children,
  type = 'button',
  disabled = false,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
