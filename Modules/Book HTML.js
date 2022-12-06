export default (title, author, element) => {
  const newBook = document.createElement('div');
  newBook.setAttribute('class', 'book-list');
  const newEntry = document.createElement('div');
  newEntry.innerHTML = `<span> "${title}" by ${author} </span><button class="remove">Remove</button>`;
  newBook.appendChild(newEntry);
  element.appendChild(newBook);
  return false;
};