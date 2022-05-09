import './sass/main.scss';

import pagination from './js/pagination';

import { refs } from './js/refs';

import displayTrandingMovies from './js/displayTrandingMovies';
import renderMovieByQuery from './js/movie-by-word';
import renderModal from './js/renderModal';

import filter from './js/filter';

refs.logo.addEventListener('click', displayTrandingMovies);
refs.form.addEventListener('submit', renderMovieByQuery);

displayTrandingMovies();
filter();
