import { DateTime } from 'luxon';
import { zoneFormat } from './zoneFormat';

export default function getDateInPortugalTimezone(date, hour) {
  const dateInPortugal = DateTime.fromISO(`${date}T${hour}Z`, { zone: zoneFormat }); // mudar para timezone de PT

  return dateInPortugal;
}
