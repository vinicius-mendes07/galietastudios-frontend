import delay from '../utils/delay';
import api from './utils/api';

class SchedulesService {
  async listSchedules(date = '') {
    await delay(2000);
    if (date) {
      const { data } = await api.get(`/schedules?date=${date}`);
      return data;
    }
    const { data } = await api.get('/schedules');
    return data;
  }

  async listCanceledDays() {
    await delay(2000);
    const { data } = await api.get('/schedules/canceled');
    return data;
  }

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
