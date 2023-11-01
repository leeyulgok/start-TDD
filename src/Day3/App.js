class App {
  expirationDate(payment, date) {
    const startDate = new Date(date);
    let year = startDate.getFullYear();
    let month = startDate.getMonth();
    let day = startDate.getDate();

    if (payment === 10000) {
      month += 1;
    } else if (payment === 100000) {
      year += 1;
    } else if (payment >= 20000) {
      month += payment / 10000;
    } else {
      return "구독료가 부족합니다.";
    }

    year += Math.floor(month / 12);
    month %= 12;

    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    if (day > lastDayOfMonth) {
      day = lastDayOfMonth;
    }

    month += 1;
    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();

    return `${year}-${formattedMonth}-${formattedDay}`;
  }
}

export default App;
