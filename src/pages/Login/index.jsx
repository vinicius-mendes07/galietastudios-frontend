import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';
import { Input } from '../../components/Input';
import useErrors from '../../hooks/useErrors';
import UsersServices from '../../services/UsersServices';
import isEmailValid from '../../utils/isEmailValid';
import toast from '../../utils/toast';
import { Container } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const {
    getErrorMessageByField, removeError, setError,
  } = useErrors();

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (!event.target.value || !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      await UsersServices.login({ email, password });

      navigate('/panel');
    } catch (error) {
      if (error?.response?.data?.error === 'Invalid email or password') {
        toast({
          type: 'danger',
          text: 'E-mail ou senha inválidos!',
        });
        return;
      }
      console.log(error);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao efetuar login!',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isFormValid = password && isEmailValid(email);
  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup error={getErrorMessageByField('email')}>
          <Input
            error={getErrorMessageByField('email')}
            placeholder="E-mail"
            type="email"
            onChange={handleEmailChange}
            value={email}
            disabled={isSubmitting}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Senha"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            disabled={isSubmitting}
          />
        </FormGroup>

        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </form>
    </Container>
  );
}
