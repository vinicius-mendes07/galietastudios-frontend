import delay from '../utils/delay';
import api from './utils/api';

class ServicesService {
  async listServices() {
    await delay(2000);
    const { data } = await api.get('/services');

    return data;
  }
}

export default new ServicesService();
