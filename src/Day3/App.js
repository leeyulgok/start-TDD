class App {
  async start() {}

  expirationDate(payment, date) {
    if(payment !== 10000) return '구독료가 정확하지 않습니다.';
    let expDate = new Date(date);
    
    let year = expDate.getFullYear();
    let month = expDate.getMonth() + 2;
    let day = expDate.getDate();
    
    if(month > 12) {
      month %= 12;
      year += 1;
    }

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };
}

export default App;