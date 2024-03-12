export default function getHourOnly(dateObject) {
  const dateAndHour = dateObject.toISO().split('T');

  const hourWithSeconds = dateAndHour[1];

  const hourOnly = hourWithSeconds.substring(0, 5);

  return hourOnly;
}
