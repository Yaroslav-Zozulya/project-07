import MovieTranding from './movieTranding';
import RenderMovie from './renderMovie';
const ref = {
  containerMovies: document.querySelector('.collection'),
};
let movies = new MovieTranding();

let renderMovie = new RenderMovie({
  container_link: ref.containerMovies,
  isRating: false,
});

function displayTrandingMovie() {
  movies.getTranding().then(data => {
    renderMovie.render(data);
  });
}
export default displayTrandingMovie;
