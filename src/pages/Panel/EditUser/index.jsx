import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import formatPhoneBR from '../../../utils/formatPhoneBR';
import isEmailValid from '../../../utils/isEmailValid';
import { Container } from './styles';

export default function EditUser() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { userId } = useParams();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(formatPhoneBR(event.target.value));
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
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
      <Input
        type="text"
        placeholder="Nome *"
        onChange={handleNameChange}
        value={name}
      />
      <Input
        type="text"
        placeholder="Telefone *"
        onChange={handlePhoneChange}
        value={phone}
      />
      <Input
        type="email"
        placeholder="E-mail *"
        onChange={handleEmailChange}
        value={email}
      />
      <Input
        type="text"
        placeholder="Nova senha"
        onChange={handleNewPasswordChange}
        value={newPassword}
      />

      <Button
        type="submit"
        disabled={!isFormValid}
      >
        Confirmar
      </Button>
    </Container>
  );
}
