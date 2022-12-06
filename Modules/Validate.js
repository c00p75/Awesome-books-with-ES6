export default function validation(titleField, authorField) {
  if (titleField.value === '' || authorField.value === '') { return false; }
  return true;
}