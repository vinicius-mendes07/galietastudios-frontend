import SchedulesHeader from '../../../components/Panel/SchedulesHeader';
import SchedulesList from '../../../components/Panel/SchedulesList';
import { Container } from './styles';

export default function PendingSchedules() {
  return (
    <Container>
      <SchedulesHeader />
      <SchedulesList />
    </Container>
  );
}
