import PropTypes from 'prop-types';
import { Container } from './styles';
import sad from '../../assets/images/sad.svg';
import Button from '../Button';

export default function ErrorContainer({ text, onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="sad" />
      <div className="details">
        <strong>{text}</strong>
        <Button
          type="button"
          onClick={onTryAgain}
        >
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorContainer.propTypes = {
  text: PropTypes.string.isRequired,
  onTryAgain: PropTypes.func.isRequired,
};
