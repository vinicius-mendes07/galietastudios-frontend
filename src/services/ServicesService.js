import delay from '../utils/delay';
import api from './utils/api';

class ServicesService {
  async listServices() {
    await delay(1000);
    const { data } = await api.get('/services');

    return data;
  }

  async createService({ service_type, duration }) {
    await delay(1000);

    const token = localStorage.getItem('galieta-token');

    const { data } = await api.post(
      '/services',
      { service_type, duration },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return data;
  }

  async deleteService(id) {
    await delay(1000);

    const token = localStorage.getItem('galieta-token');

    const { data } = await api.delete(
      `/services/${id}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return data;
  }
}

export default new ServicesService();
