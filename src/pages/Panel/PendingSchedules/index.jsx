import { useState } from 'react';
import SchedulesHeader from '../../../components/Panel/SchedulesHeader';
import SchedulesList from '../../../components/Panel/SchedulesList';
import { Container } from './styles';

export default function PendingSchedules() {
  const [schedules, setSchedules] = useState([
    {
      id: `${Math.random()}`,
      client_name: 'Carlos',
      client_phone: '48568648987',
      client_email: 'carlos@email.com',
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
    {
      id: `${Math.random()}`,
      client_name: 'Rafael',
      client_phone: '48568648987',
      client_email: 'rafael@email.com',
      hour: '15:00',
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
      hour: '16:30',
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
      hour: '17:00',
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
  ]);

  const hasSchedules = schedules.length > 0;
  return (
    <Container>
      <SchedulesHeader />

      {hasSchedules && (
        <SchedulesList
          schedules={schedules}
          hasConfirmBtn
          setSchedules={setSchedules}
        />
      )}

      {!hasSchedules && <p>Nenhum agendamento</p>}
    </Container>
  );
}
