import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import { Container } from './styles';

export default function PageHeader({ title, buttonLabel, path }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(path);
  }
  return (
    <Container>
      <h1>{title}</h1>
      <Button
        onClick={handleClick}
      >
        {buttonLabel}
      </Button>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
