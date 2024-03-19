import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function SideBar() {
  return (
    <Container>
      <Link to="/panel">Agendamentos</Link>
      <Link to="/panel/services">Serviços</Link>
    </Container>
  );
}
