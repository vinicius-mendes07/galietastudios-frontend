import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import SchedulesService from '../../../services/SchedulesService';
import toast from '../../../utils/toast';
import { Container } from './styles';

export default function CancelDay() {
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      await SchedulesService.cancelDay({ schedule_date: date });

      toast({
        type: 'success',
        text: 'Dia de serviço cancelado com sucesso!',
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }

      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cancelar o dia de serviço!',
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <h1>Cancelar dia de serviço</h1>
      <label>
        Data:
        <Input
          type="date"
          onChange={handleDateChange}
          value={date}
          disabled={isSubmitting}
        />
      </label>
      <Button
        type="submit"
        disabled={!date}
        isLoading={isSubmitting}
      >Confirmar
      </Button>
    </Container>
  );
}
