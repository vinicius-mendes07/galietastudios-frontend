import { useCallback, useState } from 'react';
import Modal from '../../../components/Modal';
import SchedulesHeader from '../../../components/Panel/SchedulesHeader';
import SchedulesList from '../../../components/Panel/SchedulesList';
import delay from '../../../utils/delay';
import toast from '../../../utils/toast';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scheduleBeingDeleted, setScheduleBeingDeleted] = useState(null);
  const [scheduleBeingConfirmed, setScheduleBeingConfirmed] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(null);
  const [isDanger, setIsDanger] = useState(false);

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
      await delay(1000);
      // await SchedulesService.confirmSchedule(scheduleBeingConfirmed.id);

      setSchedules((prevState) => prevState.filter(
        (schedule) => schedule.id !== scheduleBeingConfirmed.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Agendamento confirmado com sucesso!',
      });
    } catch {
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
      await delay(1000);
      // await ContactsService.deleteContact(contactBeingDeleted.id);

      setSchedules((prevState) => prevState.filter(
        (schedule) => schedule.id !== scheduleBeingDeleted.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Agendamento cancelado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cancelar o agendamento!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

  const hasSchedules = schedules.length > 0;
  return (
    <Container>
      <SchedulesHeader />

      {hasSchedules && (
        <>
          <SchedulesList
            schedules={schedules}
            hasConfirmBtn
            onDelete={handleOpenDeleteScheduleModal}
            onConfirm={handleOpenConfirmScheduleModal}
          />
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
        </>
      )}
    </Container>
  );
}
