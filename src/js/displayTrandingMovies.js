import API from './fetchAPI';
import renderMovie from './renderMovie';
import loader from './loader';
const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.insertAdjacentHTML('beforeend', data);
}

function displayTrandingMovie() {
  ref.containerMovies.innerHTML = '';
  loader.addLoader();

  API.getMoviesByTrending()
    .then(data => {
      return renderMovie(data, true);
    })
    .then(appendGallery)
    .finally(loader.removeLoader);
}

export default displayTrandingMovie;
