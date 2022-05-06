import displayTrandingMovie from './displayTrandingMovies';

const refs = {
  logo: document.querySelector('.logo-btn'),
  containerMovies: document.querySelector('.collection'),
};

refs.logo.addEventListener('click', onLogoClick);

function onLogoClick() {
  refs.containerMovies.innerHTML('');
  displayTrandingMovie();
}
