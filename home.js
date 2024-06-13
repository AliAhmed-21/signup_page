const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  delete currentUser.loggedIn;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  window.location.href = 'index.html';
});

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser.loggedIn) {
  window.location.href = 'index.html';
}
document.getElementById('username').textContent = currentUser.name;