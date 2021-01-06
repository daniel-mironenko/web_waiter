export function getTime(date) {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour > 9 ? hour : `0${hour}`}:${minutes > 9 ? minutes : `0${minutes}`}`
}

export function getCustomDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}