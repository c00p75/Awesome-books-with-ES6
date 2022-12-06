export function addSection() {
  document.getElementById('add-book').style.display = 'block';
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('list').style.color = 'Black';
  document.getElementById('contact-btn').style.color = 'Black';
  document.getElementById('add').style.color = 'Blue';
}

export function listSection() {
  document.getElementById('book-list').style.display = 'block';
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('list').style.color = 'Blue';
  document.getElementById('contact-btn').style.color = 'Black';
  document.getElementById('add').style.color = 'Black';
}

export function contactSection() {
  document.getElementById('contact').style.display = 'block';
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('list').style.color = 'Black';
  document.getElementById('contact-btn').style.color = 'Blue';
  document.getElementById('add').style.color = 'Black';
}