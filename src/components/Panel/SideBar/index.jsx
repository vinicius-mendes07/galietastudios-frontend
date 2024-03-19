import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function SideBar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link
        className={pathname === '/panel' || pathname === '/panel/confirmed' ? 'active' : ''}
        to="/panel"
      >
        Agendamentos
      </Link>
      <Link
        className={pathname === '/panel/services' ? 'active' : ''}
        to="/panel/services"
      >
        Serviços
      </Link>
    </Container>
  );
}
