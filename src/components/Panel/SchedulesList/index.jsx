import PropTypes from 'prop-types';
import { Container, Card } from './styles';

import formatPhoneBR from '../../../utils/formatPhoneBR';

import trash from '../../../assets/images/icons/trash.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';
import getDateAndHourInPortugalTimeZone from '../../../utils/getDateAndHourInPortugalTimezone';

export default function SchedulesList({
  schedules,
  hasConfirmBtn = false,
  onDelete,
  onConfirm,
}) {
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
            {hasConfirmBtn && (
              <button
                type="button"
                className="btn-confirm"
                onClick={() => onConfirm(schedule)}
              >
                <img src={checkCircle} alt="confirm" />
              </button>
            )}
            <button
              type="button"
              className="btn-delete"
              onClick={() => onDelete(schedule)}
            >
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

SchedulesList.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    client_name: PropTypes.string.isRequired,
    client_phone: PropTypes.string.isRequired,
    client_email: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    hour_end: PropTypes.string.isRequired,
    schedule_date: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    service_id: PropTypes.string.isRequired,
    service_type: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    user_id: PropTypes.string.isRequired,
    barber_name: PropTypes.string.isRequired,
    barber_phone: PropTypes.string.isRequired,
    barber_email: PropTypes.string.isRequired,
  })).isRequired,
  hasConfirmBtn: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};
