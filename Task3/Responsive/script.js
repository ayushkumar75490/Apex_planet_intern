function showAlert() {
  alert('Hello from Card 1!');
}

function changeColor(btn) {
  btn.parentElement.style.background = '#d1ecf1';
}

function toggleText(btn) {
  const text = btn.nextElementSibling;
  text.style.display = text.style.display === 'none' ? 'block' : 'none';
}