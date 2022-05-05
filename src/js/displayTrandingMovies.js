import API from './fetchAPI';
import renderMovie from './renderMovie';
const ref = {
  containerMovies: document.querySelector('.collection'),
};

const clearGallery = () => (ref.containerMovies.innerHTML = '');
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
