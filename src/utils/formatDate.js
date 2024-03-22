export default function formatDate(date = '') {
  const dateSplit = date.split('-');

  const formatedDate = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;

  return formatedDate;
}
