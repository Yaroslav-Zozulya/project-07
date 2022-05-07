import './sass/main.scss';

import pagination from './js/pagination';

import { refs } from './js/refs';

import renderModal from './js/renderModal';
import displayTrandingMovies from './js/displayTrandingMovies';
import renderMovieByQuery from './js/movie-by-word';

refs.form.addEventListener('submit', renderMovieByQuery);

displayTrandingMovies();
renderModal;

