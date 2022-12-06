import appendBookHTML from './Book HTML.js';

export default function loadBooks(array, element) {
  const stored = localStorage.getItem('Awesome Book Collection');
  if (stored !== null) { array = JSON.parse(stored); }
  array.forEach((book) => appendBookHTML(book.title, book.author, element));
}
