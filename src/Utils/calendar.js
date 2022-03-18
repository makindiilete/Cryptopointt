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

function getDayOfTheWeek(date) {
  const dateConstruct = new Date(
    `${month[new Date().getMonth()]} ${date} ${new Date().getFullYear()}`
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

export function getDays() {
  let date = new Date().getDate();
  let leftArr = [];
  let rightArr = [];

  // d 9 days b4 today
  for (let i = date - 9; i < date; i++) {
    const dayOfWeek = getDayOfTheWeek(i);
    const dayAndDate = `${dayOfWeek}${i}`;
    leftArr.push(dayAndDate);
  }

  // d 7 days after today
  for (let i = date; i <= date + 7; i++) {
    const dayOfWeek = getDayOfTheWeek(i);
    const dayAndDate = `${dayOfWeek}${i}`;
    rightArr.push(dayAndDate);
  }
  return [...leftArr, ...rightArr];
}
