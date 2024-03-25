import { useState } from 'react';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';
import { Input } from '../../components/Input';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import { Container } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      email,
      password,
    });
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
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Senha"
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </FormGroup>

        <Button
          type="submit"
          disabled={!isFormValid}
        >
          Entrar
        </Button>
      </form>
    </Container>
  );
}
