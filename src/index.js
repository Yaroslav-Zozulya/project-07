import 'swiper/swiper-bundle.min.css';
import './sass/main.scss';

import pagination from './js/pagination';
import swiper from './js/swiper';

import { refs } from './js/refs';

import displayTrandingMovies from './js/displayTrandingMovies';
import renderMovieByQuery from './js/movie-by-word';
import renderModal from './js/renderModal';
import { onHomeBtnClick, onLibBtnClick } from './js/renderHeader';
import openModalTeam from './js/teamModal';

import filter from './js/filter';

refs.logo.addEventListener('click', displayTrandingMovies);
refs.form.addEventListener('submit', renderMovieByQuery);
refs.home.addEventListener('click', displayTrandingMovies);
refs.library.addEventListener('click', onLibBtnClick);

displayTrandingMovies();
filter();
