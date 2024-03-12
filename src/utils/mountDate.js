export default function mountDate(year, month, day) {
  const correctMonth = `${month + 1}`;
  const twoDigitsMonth = correctMonth.padStart(2, '0');

  const twoDigitsDay = day.padStart(2, '0');

  const date = `${year}-${twoDigitsMonth}-${twoDigitsDay}`;

  return date;
}
