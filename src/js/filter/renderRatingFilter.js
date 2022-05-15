import rating from '../../data/ratingFilter.json';

function renderRating() {
  return rating.rating.map(markupRating);
}
function markupRating(data) {
  return `<li class="select__item rating__item" data-query=${data.query}>${data.name}</li>`;
}
function appendRating() {
  const list = document.querySelector('.filter .rating__list');
  list.innerHTML = renderRating().join('');
}

export default appendRating;
