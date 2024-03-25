import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import useErrors from '../../../hooks/useErrors';
import formatPhoneBR from '../../../utils/formatPhoneBR';
import isEmailValid from '../../../utils/isEmailValid';
import { Container } from './styles';

import FormGroup from '../../../components/FormGroup';
import UsersServices from '../../../services/UsersServices';
import formatPhoneOnlyDigits from '../../../utils/formatPhoneOnlyDigits';
import Loader from '../../../components/Loader';
import toast from '../../../utils/toast';

export default function EditUser() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const {
    getErrorMessageByField, removeError, setError,
  } = useErrors();

  useEffect(() => {
    async function loadUser() {
      try {
        const userData = await UsersServices.getCurrentUser();

        setName(userData.name);
        setPhone(formatPhoneBR(userData.phone));
        setEmail(userData.email);
        setIsLoading(false);
      } catch (error) {
        if (error?.response?.data?.tokenError) {
          navigate('/login', { replace: true });
          return;
        }

        navigate('/panel', { replace: true });
        toast({
          type: 'danger',
          text: 'Ocorreu um erro ao buscar seus dados!',
        });
      }
    }
    loadUser();
  }, [navigate]);

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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      await UsersServices.updateUser({
        name, phone: formatPhoneOnlyDigits(phone), email, newPassword,
      });

      toast({
        type: 'success',
        text: 'Usuário editado com sucesso!',
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.tokenError) {
        navigate('/login', { replace: true });
        return;
      }

      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o usuário!',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isFormValid = name && phone && isEmailValid(email);
  return (
    <Container onSubmit={handleSubmit} noValidate>
      <Loader isLoading={isLoading} />
      <h1>Meus dados</h1>

      <FormGroup error={getErrorMessageByField('name')}>
        <Input
          error={getErrorMessageByField('name')}
          type="text"
          placeholder="Nome *"
          onChange={handleNameChange}
          value={name}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByField('phone')}>
        <Input
          error={getErrorMessageByField('phone')}
          type="text"
          placeholder="Telefone *"
          onChange={handlePhoneChange}
          value={phone}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByField('email')}>
        <Input
          error={getErrorMessageByField('email')}
          type="email"
          placeholder="E-mail *"
          onChange={handleEmailChange}
          value={email}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          placeholder="Nova senha"
          onChange={handleNewPasswordChange}
          value={newPassword}
          disabled={isSubmitting}
        />
      </FormGroup>

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
