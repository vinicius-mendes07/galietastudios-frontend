import delay from '../utils/delay';
import api from './utils/api';

class UsersServices {
  async login({ email, password }) {
    await delay(1000);
    const { data } = await api.post('/users/login', { email, password });

    localStorage.setItem('galieta-token', data.token);

    return data;
  }

  async getCurrentUser() {
    await delay(1000);
    const token = localStorage.getItem('galieta-token');

    const { data } = await api.get('/users/current', { headers: { Authorization: `Bearer ${token}` } });

    return data;
  }

  async updateUser({
    name, phone, email, newPassword,
  }) {
    await delay(1000);
    const token = localStorage.getItem('galieta-token');

    const { data } = await api.put(
      '/users/current',
      {
        name, phone, email, newPassword,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return data;
  }
}

export default new UsersServices();
