// Import JS modules
import setDateTime from './Modules/date time.js';
import storeEntryData from './Modules/store data.js';
import loadBooks from './Modules/Retrieve data.js';
import updateNewBook from './Modules/Book update.js';
import removeBook from './Modules/Remove book.js';
import validation from './Modules/Validate.js';
import clear from './Modules/Clear fields.js';
import * as display from './Modules/Section display.js';

// Define essential vaiables
const bookCollection = document.querySelector('#collection');
const addBook = document.querySelector('#add-book');
const dateTime = document.getElementById('date-time');
const library = [];

// Call setDateTime function every second
setDateTime(dateTime);
setInterval(() => {
  setDateTime(dateTime);
}, 1000);

// Call loadBooks function when DOM loads
document.querySelector('DOMContentLoaded', loadBooks(library, bookCollection));

// Add button event listener
addBook.addEventListener('click', (event) => {
  event.preventDefault();
  const titleElement = event.target.parentElement.querySelector('#title');
  const authorElement = event.target.parentElement.querySelector('#author');
  if (event.target.id === 'add' && validation(titleElement, authorElement)) {
    storeEntryData(library, titleElement, authorElement);
    updateNewBook(library, bookCollection);
    clear(titleElement, authorElement);
  }
});

// Remove button event listener
bookCollection.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    removeBook(event.target, bookCollection, library);
  }
});

// Navigation buttons event listener
document.querySelector('nav').addEventListener('click', (event) => {
  if (event.target.id === 'add') { display.addSection(); }
  if (event.target.id === 'list') { display.listSection(); }
  if (event.target.id === 'contact-btn') { display.contactSection(); }
});
