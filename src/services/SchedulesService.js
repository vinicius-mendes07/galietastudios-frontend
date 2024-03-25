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

  async listSchedulesAndCanceledDays() {
    await delay(2000);

    const { data } = await api.get('/schedules/schedules-and-canceled-days');
    return data;
  }

  async listCanceledDays() {
    await delay(2000);
    const { data } = await api.get('/schedules/canceled');
    return data;
  }

  async listPending() {
    await delay(1000);

    const token = localStorage.getItem('galieta-token');

    const { data } = await api.get('/schedules/pending', { headers: { Authorization: `Bearer ${token}` } });

    return data;
  }

  async listConfirmed() {
    await delay(1000);
    const token = localStorage.getItem('galieta-token');

    const { data } = await api.get('/schedules/confirmed', { headers: { Authorization: `Bearer ${token}` } });

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

  async confirmPending(id) {
    await delay(1000);
    const token = localStorage.getItem('galieta-token');

    const { data } = await api.patch(
      `/schedules/confirm/${id}`,
      { status: 'confirmado' },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return data;
  }

  async cancelDay({ schedule_date }) {
    const { data } = await api.post('/schedules/cancel-day', { schedule_date });

    return data;
  }

  async deleteSchedule(id) {
    await delay(1000);

    const token = localStorage.getItem('galieta-token');

    const { data } = await api.delete(
      `/schedules/${id}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return data;
  }
}

export default new SchedulesService();
