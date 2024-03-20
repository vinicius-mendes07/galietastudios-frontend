import { Container, Card } from './styles';

import formatPhoneBR from '../../../utils/formatPhoneBR';

import trash from '../../../assets/images/icons/trash.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';
import getDateAndHourInPortugalTimeZone from '../../../utils/getDateAndHourInPortugalTimezone';

const schedules = [
  {
    id: Math.random(),
    client_name: 'Mateus',
    client_phone: '48568648987',
    client_email: 'mateus@email.com',
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
    id: Math.random(),
    client_name: 'Lucas',
    client_phone: '48568648987',
    client_email: 'lucas@email.com',
    hour: '14:00',
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
    id: Math.random(),
    client_name: 'Joao',
    client_phone: '48568648987',
    client_email: 'joao@email.com',
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
    id: Math.random(),
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

export default function SchedulesList() {
  return (
    <Container>
      {schedules.map((schedule) => (
        <Card key={schedule.id}>
          <div className="info">
            <div className="name-wrapper">
              <div className="name">
                <strong>{schedule.client_name}</strong>
                <small>{formatPhoneBR(schedule.client_phone)}</small>
              </div>
              <span>{schedule.client_email}</span>
            </div>

            <div className="date-wrapper">
              <div className="date">
                <strong>
                  {
                    getDateAndHourInPortugalTimeZone(schedule.schedule_date, schedule.hour)
                      .dateInPortugal
                  }
                </strong>
                <span>
                  {
                    getDateAndHourInPortugalTimeZone(schedule.schedule_date, schedule.hour)
                      .hourInPortugal
                  }
                </span>
              </div>
              <span>{schedule.duration} minutos</span>
            </div>

            <span className="service-type">{schedule.service_type}</span>
          </div>
          <div className="actions">
            <button
              type="button"
              className="btn-confirm"
            >
              <img src={checkCircle} alt="confirm" />
            </button>
            <button
              type="button"
              className="btn-delete"
            >
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
