import ScheduleForm from '../../components/ScheduleForm';
import { Container } from './styles';

export default function Schedule() {
  return (
    <Container>
      <h1>Agendar novo horário</h1>
      <div>
        <ScheduleForm />
      </div>

    </Container>
  );
}
