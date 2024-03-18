import { Link } from 'react-router-dom';
import successCircle from '../../assets/images/success-circle.svg';
import { Container } from './styles';

export default function ScheduleSuccess() {
  return (
    <Container>
      <img src={successCircle} alt="check-circle" />
      <h1>Deu certo!</h1>
      <p>
        Sua solicitação de agendamento foi efetuada com sucesso,
        enviamos os detalhes do seu agendamento para o seu email!
      </p>
      <p>Entraremos em contato quando ele for confirmado!</p>
      <p>Por favor, verifique sua caixa de entrada e também de spam.</p>

      <Link to="/">Página inicial</Link>
    </Container>
  );
}
