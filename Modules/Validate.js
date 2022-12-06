export default (titleField, authorField) => {
  if (titleField.value === '' || authorField.value === '') { return false; }
  return true;
}