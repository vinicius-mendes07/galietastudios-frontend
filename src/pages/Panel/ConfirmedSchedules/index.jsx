import SchedulesHeader from '../../../components/Panel/SchedulesHeader';
import SchedulesList from '../../../components/Panel/SchedulesList';
import { Container } from './styles';

const schedules = [
  {
    id: `${Math.random()}`,
    client_name: 'Mateus',
    client_phone: '48568648987',
    client_email: 'mateus@email.com',
    hour: '10:00',
    hour_end: '15:00',
    schedule_date: '2024-03-21',
    available: false,
    status: 'pending',
    service_id: 'few79few-few7f-fwef-ffsnbjk',
    service_type: 'Cabelo e Barba',
    duration: 60,
    user_id: 'few79few-few7f-fwef-ffsnbjk',
    barber_name: 'joe',
    barber_phone: '52153415',
    barber_email: 'joe@email.com',
  },
  {
    id: `${Math.random()}`,
    client_name: 'Lucas',
    client_phone: '48568648987',
    client_email: 'lucas@email.com',
    hour: '11:00',
    hour_end: '15:00',
    schedule_date: '2024-03-21',
    available: false,
    status: 'pending',
    service_id: 'few79few-few7f-fwef-ffsnbjk',
    service_type: 'Cabelo e Barba',
    duration: 30,
    user_id: 'few79few-few7f-fwef-ffsnbjk',
    barber_name: 'joe',
    barber_phone: '52153415',
    barber_email: 'joe@email.com',
  },
  {
    id: `${Math.random()}`,
    client_name: 'Joao',
    client_phone: '48568648987',
    client_email: 'joao@email.com',
    hour: '13:00',
    hour_end: '15:00',
    schedule_date: '2024-03-21',
    available: false,
    status: 'pending',
    service_id: 'few79few-few7f-fwef-ffsnbjk',
    service_type: 'Cabelo e Barba',
    duration: 60,
    user_id: 'few79few-few7f-fwef-ffsnbjk',
    barber_name: 'joe',
    barber_phone: '52153415',
    barber_email: 'joe@email.com',
  },
  {
    id: `${Math.random()}`,
    client_name: 'Pedro',
    client_phone: '48568648987',
    client_email: 'pedro@email.com',
    hour: '14:00',
    hour_end: '15:00',
    schedule_date: '2024-03-21',
    available: false,
    status: 'pending',
    service_id: 'few79few-few7f-fwef-ffsnbjk',
    service_type: 'Cabelo e Barba',
    duration: 60,
    user_id: 'few79few-few7f-fwef-ffsnbjk',
    barber_name: 'joe',
    barber_phone: '52153415',
    barber_email: 'joe@email.com',
  },
];

export default function ConfirmedSchedules() {
  return (
    <Container>
      <SchedulesHeader />
      <SchedulesList
        schedules={schedules}
        hasConfirmBtn={false}
      />
    </Container>
  );
}
