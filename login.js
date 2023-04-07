function loginFunc(e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  var result = document.getElementById('result');

  var username = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    result.innerHTML = 'wrong username';
  } else if (username == data.username && pass == data.password) {
    result.innerHTML = 'logged in';
  } else {
    result.innerHTML = 'wrong password';
  }

}