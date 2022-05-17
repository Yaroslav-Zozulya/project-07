import 'swiper/swiper-bundle.min.css';
import './sass/main.scss';

import { refs } from './js/refs';

import displayTrandingMovies from './js/displayTrandingMovies';
import renderMovieByQuery from './js/movieByWord';
import { onLibBtnClick } from './js/renderHeader';
import openModalTeam from './js/teamModal';
import getFilmSlider from './js/slider';
import returner from './js/returner';
import { darkMode, darkModeCheck } from './js/darkMode';
import { filter } from './js/filter/filter';

refs.openModalBtn.addEventListener('click', openModalTeam);
refs.logo.addEventListener('click', displayTrandingMovies);
refs.form.addEventListener('submit', renderMovieByQuery);
refs.home.addEventListener('click', displayTrandingMovies);
refs.library.addEventListener('click', onLibBtnClick);
refs.themBtn.addEventListener('click', darkMode);

displayTrandingMovies();
filter();
returner();
darkModeCheck();
getFilmSlider();
