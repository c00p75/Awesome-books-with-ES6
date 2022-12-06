export default function removeBook(bookElement, collection, array) {
  const parent = bookElement.parentElement.parentElement;
  const parrentIndex = Array.from(collection.children).indexOf(parent);
  parent.remove();
  array.splice(parrentIndex, 1);
  localStorage.setItem('Awesome Book Collection', JSON.stringify(array));
}
