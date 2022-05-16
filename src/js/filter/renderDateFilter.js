import date from '../../data/dateFilter.json';

function renderDate() {
  return date.date.map(markupDate);
}
function markupDate(data) {
  return `<li class="select__item date__item" data-query=${data.query}>${data.name}</li>`;
}

function appendDate() {
  const list = document.querySelector('.filter .date__list');
  list.innerHTML = renderDate().join('');
}

export default appendDate;
