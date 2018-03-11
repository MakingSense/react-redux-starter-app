export function login(username, password) {
  if (username === 'username' && password === 'password') {
    const user = {
      name: 'John'
    };
    return new Promise(function (resolve) {
      setTimeout(resolve, Math.random() * 200, user);
    });
  }
  else {
    const message = 'Invalid credentials.';
    return new Promise(function (resolve, reject) {
      setTimeout(reject, Math.random() * 200, message);
    });
  }
}
