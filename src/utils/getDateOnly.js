export default function getDateOnly(dateObject) {
  const dateAndHour = dateObject.toISO().split('T');

  const dateOnly = dateAndHour[0];

  return dateOnly;
}
