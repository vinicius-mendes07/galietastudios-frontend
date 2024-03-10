import { useState } from 'react';

import {
  Form,
  FormContainer,
  CalendarContainer,
  HourContainer,
  ButtonContainer,
  HourButton,
} from './styles';
import useErrors from '../../hooks/useErrors';

import formatPhoneBR from '../../utils/formatPhoneBR';
import isEmailValid from '../../utils/isEmailValid';
import Calendar from '../Calendar';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import Button from '../Button';

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [hour, setHour] = useState('');
  const [selectedDate, setSelectedDate] = useState({});

  const hours = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
  ];

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByField,
  } = useErrors();

  const isFormValid = (
    name
    && phone
    && email
    && serviceId
    && Object.keys(selectedDate).length !== 0
    && hour
    && errors.length === 0
  );

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }
  function handlePhoneChange(event) {
    setPhone(formatPhoneBR(event.target.value));

    if (!event.target.value) {
      setError({ field: 'phone', message: 'Telefone é obrigatório.' });
    } else {
      removeError('phone');
    }
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (!event.target.value || !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }
  function handleServiceIdChange(event) {
    setServiceId(event.target.value);

    if (!event.target.value) {
      setError({ field: 'serviceId', message: 'Serviço é obrigatório.' });
    } else {
      removeError('serviceId');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      phone,
      email,
      serviceId,
      hour,
      selectedDate,
    });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormContainer>
        <FormGroup error={getErrorMessageByField('name')}>
          <Input
            error={getErrorMessageByField('name')}
            type="text"
            placeholder="Nome *"
            onChange={handleNameChange}
            value={name}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByField('phone')}>
          <Input
            error={getErrorMessageByField('phone')}
            type="text"
            placeholder="Telefone *"
            onChange={handlePhoneChange}
            value={phone}
            maxLength="15"
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByField('email')}>
          <Input
            error={getErrorMessageByField('email')}
            type="email"
            placeholder="E-mail *"
            onChange={handleEmailChange}
            value={email}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByField('serviceId')}>
          <Select
            error={getErrorMessageByField('serviceId')}
            onChange={handleServiceIdChange}
            value={serviceId}
          >
            <option value="">Serviço</option>
            <option value="Barba">Barba</option>
            <option value="Cabelo">Cabelo</option>
          </Select>
        </FormGroup>
      </FormContainer>

      <CalendarContainer>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setHour={setHour}
        />
        <HourContainer>
          {hours.map((hourAndMinute, index) => (
            <HourButton
              type="button"
              key={index}
              hour={hourAndMinute}
              onClick={() => setHour(hourAndMinute)}
              $selectedHour={hour === hourAndMinute}
            >
              {hourAndMinute}
            </HourButton>
          ))}
        </HourContainer>

        <ButtonContainer>
          <Button
            type="submit"
            disabled={!isFormValid}
          >
            Agendar
          </Button>
        </ButtonContainer>

      </CalendarContainer>

    </Form>
  );
}
