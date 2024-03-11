import { DateTime } from 'luxon';

export default function getDateInUTCTimezone(date, hour) {
  const portugalDateTime = DateTime.fromISO(`${date}T${hour}`, { zone: 'Brazil/West' }); // mudar para timezone de PT

  const UTCDateTime = portugalDateTime.toUTC();

  const dateAndHourInUtc = UTCDateTime.toISO().split('T');

  const dateInUtc = dateAndHourInUtc[0];

  const hourWithSeconds = dateAndHourInUtc[1];

  const hourInUtc = hourWithSeconds.substring(0, 5);

  return { dateInUtc, hourInUtc };
}
