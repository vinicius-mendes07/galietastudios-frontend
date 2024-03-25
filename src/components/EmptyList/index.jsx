import PropTypes from 'prop-types';
import { Container } from './styles';
import emptyBox from '../../assets/images/empty-box.svg';

export default function EmptyList({ text }) {
  <Container>
    <img src={emptyBox} alt="empty box" />
    <p>{text}</p>
  </Container>;
}

EmptyList.propTypes = {
  text: PropTypes.string.isRequired,
};
