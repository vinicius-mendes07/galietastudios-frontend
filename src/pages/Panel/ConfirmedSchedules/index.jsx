import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EmptyList from '../../../components/EmptyList';
import ErrorContainer from '../../../components/ErrorContainer';
import Loader from '../../../components/Loader';
import SchedulesHeader from '../../../components/Panel/SchedulesHeader';
import SchedulesList from '../../../components/Panel/SchedulesList';
import SchedulesService from '../../../services/SchedulesService';
import { Container } from './styles';

export default function ConfirmedSchedules() {
  const [schedules, setSchedules] = useState([]);
  const [isLoadingSchedules, setIsLoadingSchedules] = useState(true);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const loadConfirmedSchedules = useCallback(async () => {
    try {
      setIsLoadingSchedules(true);
      const confirmedSchedulesList = await SchedulesService.listConfirmed();

      setSchedules(confirmedSchedulesList);
      setHasError(false);
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.tokenError) {
        navigate('/login');
      }

      setSchedules([]);
      setHasError(true);
    } finally {
      setIsLoadingSchedules(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadConfirmedSchedules();
  }, [loadConfirmedSchedules]);

  const hasSchedules = schedules.length > 0;
  const isListEmpty = !hasError && !isLoadingSchedules && !hasSchedules;
  return (
    <Container>
      <Loader isLoading={isLoadingSchedules} />
      <SchedulesHeader />

      {hasSchedules && (
        <SchedulesList
          schedules={schedules}
          setSchedules={setSchedules}
        />
      )}

      {isListEmpty && <EmptyList text="Nenhum agendamento confirmado." />}

      {hasError && (
      <ErrorContainer
        text="Erro ao carregar agendamentos confirmados"
        onTryAgain={loadConfirmedSchedules}
      />
      )}
    </Container>
  );
}
