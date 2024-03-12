import { DateTime } from 'luxon';
import { zoneFormat } from './zoneFormat';

export default function getCurrentDateAndHour() {
  const currentDate = DateTime.now(); // mudar para timezone de PT

  const currentDateAndHour = currentDate.setZone(zoneFormat);

  return { currentDateAndHour };
}
