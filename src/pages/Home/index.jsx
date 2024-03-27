import { Link } from 'react-router-dom';
import { FirstSection, LinkWrapper } from './styles';

export default function Home() {
  return (
    <main>
      <FirstSection id="section1">
        <div>
          <h2>Galieta Barbershop</h2>
          <h1>O toque artístico que vai além do corte.</h1>

          <LinkWrapper>
            <Link to="/schedule">
              Agendar horário
            </Link>
          </LinkWrapper>
        </div>
      </FirstSection>
    </main>
  );
}
