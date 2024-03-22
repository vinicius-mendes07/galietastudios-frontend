import { useState } from 'react';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Container } from './styles';

export default function NewService() {
  const [serviceType, setServiceType] = useState('');
  const [duration, setDuration] = useState(0);

  function handleServiceTypeChange(event) {
    setServiceType(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(+event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      service_type: serviceType,
      duration,
    });
  }

  const isFormValid = (duration && serviceType);
  return (
    <Container onSubmit={handleSubmit}>
      <h1>Novo Serviço</h1>
      <Input
        type="text"
        onChange={handleServiceTypeChange}
        placeholder="Serviço"
      />
      <Select
        type="text"
        onChange={handleDurationChange}
      >
        <option value="">Duração</option>
        <option value="30">30 minutos</option>
        <option value="60">60 minutos</option>
      </Select>
      <Button
        type="submit"
        disabled={!isFormValid}
      >
        Confirmar
      </Button>
    </Container>
  );
}
