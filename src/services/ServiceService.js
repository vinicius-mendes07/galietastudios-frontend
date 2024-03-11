import api from './utils/api';

class ServiceService {
  async listServices() {
    const { data } = await api.get('/services');

    return data;
  }
}

export default new ServiceService();
