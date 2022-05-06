import API from './fetchAPI';
import renderMovie from './renderMovie';
import renderModal from './renderModal';
const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.insertAdjacentHTML('beforeend', data);
}

function displayTrandingMovie() {
  API.getMoviesByTrending()
    .then(data => {
      return renderMovie(data, true);
    })
    .then(appendGallery);
}

export default displayTrandingMovie;
