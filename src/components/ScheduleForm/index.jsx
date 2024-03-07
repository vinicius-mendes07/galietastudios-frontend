import { useState } from 'react';
import useErrors from '../../hooks/useErrors';
import formatPhoneBR from '../../utils/formatPhoneBR';
import isEmailValid from '../../utils/isEmailValid';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Container } from './styles';

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('');

  const {
    setError,
    removeError,
    getErrorMessageByField,
  } = useErrors();

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

  return (
    <Container>
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
    </Container>
  );
}
