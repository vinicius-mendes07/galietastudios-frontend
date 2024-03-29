import { Link } from 'react-router-dom';
import { LinkWrapper } from '../LinkWrapper/styles';
import { Container } from './styles';

export default function FirstSection() {
  return (
    <Container id="section1">
      <div>
        <h2>Galieta Barbershop</h2>
        <h1>O toque artístico que vai além do corte.</h1>

        <LinkWrapper>
          <Link to="/schedule">
            Agendar horário
          </Link>
        </LinkWrapper>
      </div>
    </Container>
  );
}
