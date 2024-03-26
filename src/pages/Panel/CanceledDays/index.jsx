import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/Panel/PageHeader';
import { Card, Container } from './styles';

import trash from '../../../assets/images/icons/trash.svg';
import formatDate from '../../../utils/formatDate';
import delay from '../../../utils/delay';
import toast from '../../../utils/toast';
import Modal from '../../../components/Modal';
import SchedulesService from '../../../services/SchedulesService';
import Loader from '../../../components/Loader';
import EmptyList from '../../../components/EmptyList';
import ErrorContainer from '../../../components/ErrorContainer';

export default function CanceledDays() {
  const [canceledDays, setCanceledDays] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [canceledDayBeingDeleted, setCanceledDayBeingDeleted] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [isLoadingCaceledDays, setIsLoadingCaceledDays] = useState(true);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

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
      await SchedulesService.deleteSchedule(canceledDayBeingDeleted.id);

      setCanceledDays((prevState) => prevState.filter(
        (canceledDay) => canceledDay.id !== canceledDayBeingDeleted.id,
      ));
      handleCloseModal();

      toast({
        type: 'success',
        text: 'Dia cancelado restaurado com sucesso!',
      });
    } catch (error) {
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }

      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao restaurar o dia cancelado!',
      });
    } finally {
      setIsLoadingModal(false);
    }
  }

  const loadCanceledDays = useCallback(async () => {
    try {
      setIsLoadingCaceledDays(true);
      const canceledDaysList = await SchedulesService.listCanceledDays();

      setCanceledDays(canceledDaysList);
      setHasError(false);
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
      }

      setCanceledDays([]);
      setHasError(true);
    } finally {
      setIsLoadingCaceledDays(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadCanceledDays();
  }, [loadCanceledDays]);

  const hasCanceledDays = canceledDays.length > 0;
  const isListEmpty = !hasError && !isLoadingCaceledDays && !hasCanceledDays;
  return (
    <Container>
      <Loader isLoading={isLoadingCaceledDays} />
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

        {isListEmpty && <EmptyList text="Nenhum dia cancelado." />}

        {hasError && (
          <ErrorContainer
            text="Erro ao carregar os dias cancelados"
            onTryAgain={loadCanceledDays}
          />
        )}
      </div>
    </Container>
  );
}
