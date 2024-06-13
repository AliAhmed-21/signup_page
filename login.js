const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  if (users.some((user) => user.email === email)) { 
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      user.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = 'home.html';
    } else {
      alert('Invalid password!');
    }
  } else {
    alert(' Please Signup first ');
  }
});