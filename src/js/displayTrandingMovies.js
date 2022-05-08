import API from './fetchAPI';
import renderMovie from './renderMovie';
import loader from './loader';
const ref = {
  containerMovies: document.querySelector('.collection'),
};

function appendGallery(data) {
  ref.containerMovies.innerHTML = data;
}

function displayTrandingMovie() {
  loader.addLoader();

  API.getMoviesByTrending()
    .then(data => {
      return renderMovie(data, true);
    })
    .then(appendGallery)
    .finally(loader.removeLoader);
}

export default displayTrandingMovie;
