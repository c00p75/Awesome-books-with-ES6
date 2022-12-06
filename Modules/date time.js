export default function setDateTime(element) {
  const date = new Date();
  element.textContent = date;
}