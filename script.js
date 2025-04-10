document.getElementById('gameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const match = document.getElementById('match').value;
  alert(`${username}, je hebt je match: ${match}!`);
});
