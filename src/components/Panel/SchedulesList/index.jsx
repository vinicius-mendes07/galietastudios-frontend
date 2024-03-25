import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Card } from './styles';

import formatPhoneBR from '../../../utils/formatPhoneBR';

import trash from '../../../assets/images/icons/trash.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';
import getDateAndHourInPortugalTimeZone from '../../../utils/getDateAndHourInPortugalTimezone';
import toast from '../../../utils/toast';

import Modal from '../../Modal';
import SchedulesService from '../../../services/SchedulesService';

export default function SchedulesList({
  schedules,
  setSchedules,
  hasConfirmBtn = false,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scheduleBeingDeleted, setScheduleBeingDeleted] = useState(null);
  const [scheduleBeingConfirmed, setScheduleBeingConfirmed] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(null);
  const [isDanger, setIsDanger] = useState(false);

  const navigate = useNavigate();

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  const handleOpenConfirmScheduleModal = useCallback((schedule) => {
    setScheduleBeingConfirmed(schedule);
    setIsModalVisible(true);
    setIsDanger(false);
  }, []);

  async function handleConfirmSchedule() {
    try {
      setIsLoadingModal(true);
      await SchedulesService.confirmPending(scheduleBeingConfirmed.id);

      setSchedules((prevState) => prevState.filter(
        (schedule) => schedule.id !== scheduleBeingConfirmed.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Agendamento confirmado com sucesso!',
      });
    } catch (error) {
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao confirmar o agendamento!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

  const handleOpenDeleteScheduleModal = useCallback((schedule) => {
    setScheduleBeingDeleted(schedule);
    setIsModalVisible(true);
    setIsDanger(true);
  }, []);

  async function handleDeleteSchedule() {
    try {
      setIsLoadingModal(true);
      await SchedulesService.deleteSchedule(scheduleBeingDeleted.id);

      setSchedules((prevState) => prevState.filter(
        (schedule) => schedule.id !== scheduleBeingDeleted.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Agendamento cancelado com sucesso!',
      });
    } catch (error) {
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cancelar o agendamento!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

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
                onClick={() => handleOpenConfirmScheduleModal(schedule)}
              >
                <img src={checkCircle} alt="confirm" />
              </button>
            )}
            <button
              type="button"
              className="btn-delete"
              onClick={() => handleOpenDeleteScheduleModal(schedule)}
            >
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      ))}
      <Modal
        danger={isDanger}
        visible={isModalVisible}
        isLoading={isLoadingModal}
        title={
          isDanger ? `Tem certeza que deseja excluir o agendamento de "${scheduleBeingDeleted?.client_name}"?`
            : `Tem certeza que deseja confirmar o agendamento de "${scheduleBeingConfirmed?.client_name}"?`
        }
        confirmLabel={
          isDanger ? 'Deletar' : 'Confirmar'
        }
        onCancel={handleCloseModal}
        onConfirm={isDanger ? handleDeleteSchedule : handleConfirmSchedule}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
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
  hasConfirmBtn: PropTypes.bool,
  setSchedules: PropTypes.func.isRequired,
};
