import PropTypes from 'prop-types';
import { HourButton } from './styles';

export default function Hour({ hour }) {
  return (
    <HourButton
      type="button"
    >
      {hour}
    </HourButton>
  );
}

Hour.propTypes = {
  hour: PropTypes.string.isRequired,
};
