import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function SchedulesHeader() {
  const { pathname } = useLocation();

  return (
    <Container>
      <h1>Agendamentos</h1>
      <nav>
        <ul>
          <li>
            <Link
              className={pathname === '/panel' ? 'active' : ''}
              to="/panel"
            >
              Agendamentos pendentes
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/panel/confirmed' ? 'active' : ''}
              to="/panel/confirmed"
            >
              Agendamentos confirmados
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
