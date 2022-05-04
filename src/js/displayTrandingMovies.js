import MovieTranding from './MovieTranding';
import RenderMovie from './RenderMovie';
const ref = {
  containerMovies: document.querySelector('.collection'),
};
let movies = new MovieTranding();

let renderMovie = new RenderMovie({
  container_link: ref.containerMovies,
  isRating: false,
});

function displayMovie() {
  movies.getTranding().then(data => {
    renderMovie.render(data);
  });
}
export default displayMovie;
