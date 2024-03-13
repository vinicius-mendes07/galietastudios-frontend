import delay from '../utils/delay';
import api from './utils/api';

class SchedulesService {
  async createSchedule({
    name,
    phone,
    email,
    schedule_date,
    hour,
    service_id,
  }) {
    await delay(2000);

    const { data } = await api.post('/schedules', {
      name,
      phone,
      email,
      schedule_date,
      hour,
      service_id,
    });

    return data;
  }
}

export default new SchedulesService();
