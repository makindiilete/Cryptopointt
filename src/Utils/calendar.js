const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDayOfTheWeek(date, monthValue) {
  const dateConstruct = new Date(
    `${month[monthValue]} ${date} ${new Date().getFullYear()}`
  );
  const dayOfDWeek = dateConstruct.getDay();
  switch (dayOfDWeek) {
    case 0:
      return "S";
    case 1:
      return "M";
    case 2:
      return "T";
    case 3:
      return "W";
    case 4:
      return "T";
    case 5:
      return "F";
    case 6:
      return "S";
    default:
      return "S";
  }
}

function incrementCurrentDate(num) {
  const d = new Date();
  d.setDate(d.getDate() + num);
  return {
    date: d.getDate(),
    month: d.getMonth(),
  };
}

function decrementCurrentDate(num) {
  const d = new Date();
  d.setDate(d.getDate() - num);
  return {
    date: d.getDate(),
    month: d.getMonth(),
  };
}

export function getDays() {
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let leftArr = [];
  let rightArr;

  // d 9 days b4 today
  for (let i = 9; i > 0; i--) {
    const dayOfWeek = getDayOfTheWeek(
      decrementCurrentDate(i).date,
      decrementCurrentDate(i).month
    );
    const dayAndDate = `${dayOfWeek}${decrementCurrentDate(i).date}`;
    leftArr.push(dayAndDate);
  }

  // d 7 days after today
  rightArr = [`${getDayOfTheWeek(date, month)}${date}`];
  for (let i = 1; i <= 7; i++) {
    const dayOfWeek = getDayOfTheWeek(
      incrementCurrentDate(i).date,
      incrementCurrentDate(i).month
    );
    const dayAndDate = `${dayOfWeek}${incrementCurrentDate(i).date}`;
    rightArr.push(dayAndDate);
  }
  return [...leftArr, ...rightArr];
}
