const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    name,
    email,
    password
  };

  let users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Signup successful!');
  window.location.href = 'index.html';
});