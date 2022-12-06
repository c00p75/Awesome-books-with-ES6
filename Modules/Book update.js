import appendBookHTML from './Book HTML.js';
// eslint-disable-next-line max-len
export default (array, element) => {
  appendBookHTML(array[array.length - 1].title, array[array.length - 1].author, element);
  localStorage.setItem('Awesome Book Collection', JSON.stringify(array));
}