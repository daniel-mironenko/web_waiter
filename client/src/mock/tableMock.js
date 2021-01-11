const getRandomNumber = (max, min = 0) => {
  const rand = min - 0.5 + Math.random() * (max - min);
  return Math.round(rand);
};

function getRandomDate() {
  const date = new Date();
  date.setDate(date.getDate() - getRandomNumber(0, 3))
  date.setHours(date.getHours() - getRandomNumber(0, 3))
  date.setMinutes(date.getMinutes() + getRandomNumber(0, 60))

  return date;
}

function getTableMock(id) {
  return {
    id,
    numberOfTable: getRandomNumber(1, 30),
    numberOfGuests: getRandomNumber(1, 6),
    startTime: getRandomDate(),
    historyOrder: [],
    order: []
  }
}

function getTablesMock(count) {
  let id = 1;
  return new Array(count).fill().map(() => getTableMock(id++))
}

export const tablesMock = getTablesMock(2);
