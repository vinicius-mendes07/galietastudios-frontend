import { useState } from 'react';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Container } from './styles';

export default function CancelDay() {
  const [date, setDate] = useState('');

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ schedule_date: date });
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
        />
      </label>
      <Button
        type="submit"
        disabled={!date}
      >Confirmar
      </Button>
    </Container>
  );
}
