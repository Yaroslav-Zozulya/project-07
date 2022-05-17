import API from '../fetchAPI';
import renderMovie from '../renderMovie';
import loader from '../loader';
import { filterPagination } from '../pagination/filterPagination';
import { darkModeImageText } from '../darkMode';
import { lazyLoad } from '../lazyLoadImg';

const ref = {
  containerMovies: document.querySelector('.collection'),
};
let queue = '';

function appendGallery(data) {
  ref.containerMovies.innerHTML = data;
}
function getData(...args) {
  queue = args;
  displayFilterMovie(1);
}
function displayFilterMovie(page) {
  loader.addLoader();
  if (!Number.isInteger(page)) {
    page = 1;
  }
  API.fetchFilter(queue, page)
    .then(data => {
      return filterPagination(data.data);
    })
    .then(data => {
      return renderMovie(data);
    })
    .then(appendGallery)
    .then(lazyLoad)
    .then(darkModeImageText)
    .finally(loader.removeLoader);
}
export { getData, displayFilterMovie };
