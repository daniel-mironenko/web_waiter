const getRandomNumber = (max, min = 0) => {
  const rand = min - 0.5 + Math.random() * (max - min);
  return Math.round(rand);
};

function getRandomDate() {
  const date = new Date();
  date.setDate(date.getDate() - getRandomNumber(1, 3))
  date.setHours(date.getHours() - getRandomNumber(0, 3))
  date.setMinutes(date.getMinutes() + getRandomNumber(0, 60))

  return date;
}

function getEndDate(date) {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + getRandomNumber(1, 4))
  newDate.setMinutes(newDate.getMinutes() + getRandomNumber(0, 60))

  return newDate;
}

function getTableMock(id) {
  const date = getRandomDate();
  return {
    id,
    numberOfTable: getRandomNumber(1, 30),
    numberOfGuests: getRandomNumber(1, 6),
    startTime: date,
    endTime: getEndDate(date),
    order: []
  }
}

function getTablesMock(count) {
  let id = 1;
  return new Array(count).fill().map(() => getTableMock(id++))
}

export const closedTableMock = getTablesMock(20);