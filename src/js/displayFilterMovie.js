import APIfilter from './fetchFilter';
import renderMovie from './renderMovie';
import loader from './loader';

const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.innerHTML = data;
}

function filterMovie(...args) {
  loader.addLoader();
  APIfilter(...args)
    .then(data => {
      return renderMovie(data.data);
    })
    .then(appendGallery)
    .finally(loader.removeLoader);
}
export default filterMovie;