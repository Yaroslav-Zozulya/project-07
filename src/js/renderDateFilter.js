import date from '../data/dateFilter.json';

function renderDate() {
  return date.date.map(markupDate);
}
function markupDate(data) {
  return `<li class="date__item" data-query=${data.query}>${data.name}</li>`;
}
const dateString = renderDate().join('');

function appendDate() {
  const list = document.querySelector('.filter .date__list');
  list.innerHTML = dateString;
}

export default appendDate;
