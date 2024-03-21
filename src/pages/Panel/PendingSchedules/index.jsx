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
  const [isLoadingDelete, setIsLoadingDelete] = useState(null);

  // function handleConfirmSchedule(schedule) {
  //   console.log(`Confirmou o agendamento de ${schedule.client_name}`);
  //   setIsModalVisible(true);
  // }

  const handleOpenDeleteScheduleModal = useCallback((schedule) => {
    setScheduleBeingDeleted(schedule);
    setIsModalVisible(true);
  }, []);

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  async function handleConfirmDeleteSchedule() {
    try {
      setIsLoadingDelete(true);
      await delay(1000);
      // await ContactsService.deleteContact(contactBeingDeleted.id);

      throw new Error();
      // setSchedules((prevState) => prevState.filter(
      //   (schedule) => schedule.id !== scheduleBeingDeleted.id,
      // ));
      // handleCloseModal();

      // toast({
      //   type: 'success',
      //   text: 'Agendamento cancelado com sucesso!',
      // });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cancelar o agendamento!',
      });
    } finally {
      setIsLoadingDelete(false);
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
          />
          <Modal
            danger
            visible={isModalVisible}
            isLoading={isLoadingDelete}
            title={`Tem certeza que deseja excluir o agendamento de "${scheduleBeingDeleted?.client_name}"?`}
            confirmLabel="Deletar"
            onCancel={handleCloseModal}
            onConfirm={handleConfirmDeleteSchedule}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
