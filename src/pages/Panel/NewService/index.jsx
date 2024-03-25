import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import ServicesService from '../../../services/ServicesService';
import toast from '../../../utils/toast';
import { Container } from './styles';

export default function NewService() {
  const [serviceType, setServiceType] = useState('');
  const [duration, setDuration] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  function handleServiceTypeChange(event) {
    setServiceType(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(+event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      await ServicesService.createService({
        service_type: serviceType,
        duration,
      });

      setServiceType('');
      setDuration('');

      toast({
        type: 'success',
        text: 'Serviço criado com sucesso!',
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }

      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao criar o serviço!',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isFormValid = (duration && serviceType);
  return (
    <Container onSubmit={handleSubmit}>
      <h1>Novo Serviço</h1>
      <Input
        type="text"
        onChange={handleServiceTypeChange}
        placeholder="Serviço"
        disabled={isSubmitting}
        value={serviceType}
      />
      <Select
        type="text"
        onChange={handleDurationChange}
        disabled={isSubmitting}
        value={duration}
      >
        <option value="">Duração</option>
        <option value="30">30 minutos</option>
        <option value="60">60 minutos</option>
      </Select>
      <Button
        type="submit"
        disabled={!isFormValid}
        isLoading={isSubmitting}
      >
        Confirmar
      </Button>
    </Container>
  );
}
