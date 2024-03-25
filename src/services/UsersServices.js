import delay from '../utils/delay';
import api from './utils/api';

class UsersServices {
  async login({ email, password }) {
    await delay(1000);
    const { data } = await api.post('/users/login', { email, password });

    localStorage.setItem('galieta-token', data.token);

    return data;
  }
}

export default new UsersServices();
