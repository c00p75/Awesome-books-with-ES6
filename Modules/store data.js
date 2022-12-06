export default function storeEntryData(array, titleElement, authorElement) {
  const entryObject = {};
  entryObject.title = titleElement.value;
  entryObject.author = authorElement.value;
  array.push(entryObject);
}
