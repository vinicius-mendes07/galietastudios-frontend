import PropTypes from 'prop-types';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';
import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  const { shouldRender, animationElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }
  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animationElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
