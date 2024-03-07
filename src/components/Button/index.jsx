import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export default function Button({
  children,
  type = 'button',
}) {
  return (
    <StyledButton
      type={type}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
