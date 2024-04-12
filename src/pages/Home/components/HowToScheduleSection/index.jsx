import { Link } from 'react-router-dom';
import { LinkWrapper } from '../LinkWrapper/styles';
import barberShop from '../../../../assets/images/barber-shop.jpg';
import { Container } from './styles';

export default function HowToScheduleSection() {
  return (
    <Container>
      <h1>Para agendar é muito fácil.</h1>

      <div className="content">
        <img src={barberShop} alt="barber shop" />

        <div className="text">
          <span>1. Escolha o serviço para agendamento;</span>
          <span>2. Escolha o dia e horário;</span>
          <span>3. Preencha seus dados e confirme;</span>
          <span>4. Pronto! Agendamento realizado.</span>
          <LinkWrapper $backgroundColor="dark"><Link to="/schedule">Agendar agora</Link></LinkWrapper>
        </div>
      </div>
    </Container>
  );
}
