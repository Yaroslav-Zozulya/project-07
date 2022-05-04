import MovieTranding from './movieTranding';
import renderMovie from './renderMovie';
const ref = {
  containerMovies: document.querySelector('.collection'),
};
let movies = new MovieTranding();

const clearGallery = () => (ref.containerMovies.innerHTML = '');
function appendGallery(data) {
  ref.containerMovies.insertAdjacentHTML('beforeend', data);
}

function displayTrandingMovie() {
  movies
    .getTranding()
    .then(data => {
      return renderMovie(data, true);
    })
    .then(appendGallery);
}

export default displayTrandingMovie;
