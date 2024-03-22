import { useCallback, useState } from 'react';
import PageHeader from '../../../components/Panel/PageHeader';
import { Card, Container } from './styles';

import trash from '../../../assets/images/icons/trash.svg';
import formatDate from '../../../utils/formatDate';
import delay from '../../../utils/delay';
import toast from '../../../utils/toast';
import Modal from '../../../components/Modal';

export default function CanceledDays() {
  const [canceledDays, setCanceledDays] = useState([
    { id: `${Math.random()}`, schedule_date: '2024-03-23' },
    { id: `${Math.random()}`, schedule_date: '2024-03-27' },
    { id: `${Math.random()}`, schedule_date: '2024-03-28' },
    { id: `${Math.random()}`, schedule_date: '2024-04-02' },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [canceledDayBeingDeleted, setCanceledDayBeingDeleted] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(null);

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  const handleOpenDeleteCanceledDayModal = useCallback((canceledDay) => {
    setCanceledDayBeingDeleted(canceledDay);
    setIsModalVisible(true);
  }, []);

  async function handleDeleteCanceledDay() {
    try {
      setIsLoadingModal(true);
      await delay(1000);
      // await ContactsService.deleteContact(contactBeingDeleted.id);

      setCanceledDays((prevState) => prevState.filter(
        (canceledDay) => canceledDay.id !== canceledDayBeingDeleted.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Dia cancelado restaurado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao excluir o dia cancelado!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

  const hasCanceledDays = canceledDays.length > 0;
  return (
    <Container>
      <PageHeader
        title="Dias Cancelados"
        buttonLabel="Cancelar dia"
        path="/panel/cancel-day"
      />

      <div className="page-body">
        {hasCanceledDays && (
        <>
          {canceledDays.map((canceledDay) => (
            <Card key={canceledDay.id}>
              <div className="info">
                <strong>
                  {
                    formatDate(canceledDay.schedule_date)
                  }
                </strong>
              </div>
              <div className="actions">
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleOpenDeleteCanceledDayModal(canceledDay)}
                >
                  <img src={trash} alt="delete" />
                </button>
              </div>

            </Card>
          ))}
          <Modal
            danger
            visible={isModalVisible}
            isLoading={isLoadingModal}
            title={`Tem certeza que deseja restaurar o dia "${formatDate(canceledDayBeingDeleted?.schedule_date)}"?`}
            confirmLabel="Restaurar"
            onCancel={handleCloseModal}
            onConfirm={handleDeleteCanceledDay}
          >
            <p>Novos agendamentos poderão ser feitos nessa data!</p>
          </Modal>
        </>
        )}
      </div>

    </Container>
  );
}
