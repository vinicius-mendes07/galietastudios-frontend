import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import useErrors from '../../../hooks/useErrors';
import formatPhoneBR from '../../../utils/formatPhoneBR';
import isEmailValid from '../../../utils/isEmailValid';
import { Container } from './styles';

import FormGroup from '../../../components/FormGroup';

export default function EditUser() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { userId } = useParams();

  const {
    getErrorMessageByField, removeError, setError,
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

  function handleNewPasswordChange(event) {
    setNewPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      userId,
      name,
      phone,
      email,
      newPassword,
    });
  }

  const isFormValid = name && phone && isEmailValid(email);
  return (
    <Container onSubmit={handleSubmit} noValidate>
      <h1>Meus dados</h1>

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

      <FormGroup>
        <Input
          type="password"
          placeholder="Nova senha"
          onChange={handleNewPasswordChange}
          value={newPassword}
        />
      </FormGroup>

      <Button
        type="submit"
        disabled={!isFormValid}
      >
        Confirmar
      </Button>
    </Container>
  );
}
