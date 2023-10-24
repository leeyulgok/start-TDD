class App {
  checkPassword(password) {
    let count = 0;

    if (password.length >= 8) {
      count++;
    }

    if (/[0-9]/.test(password)) {
      count++;
    }

    if (/[A-Z]/.test(password)) {
      count++;
    }

    return count;
  }
}

export default App;
