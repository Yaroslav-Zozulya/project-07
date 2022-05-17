import { refs } from './refs';
import renderMovie from './renderMovie';
import { onHomeBtnClick, onLibBtnClick } from './renderHeader';
import { Notify } from 'notiflix';
import imgEmpty from '../images/no-result-to-show.png';
import { darkModeImageText } from '/js/darkMode';
import { lazyLoad } from './lazyLoadImg';

refs.home.addEventListener('click', onHomeBtnClick);
refs.library.addEventListener('click', onMyLibBtnClick);

function onMyLibBtnClick() {
  refs.sliderSection.classList.add('is-hidden');

  onLibBtnClick();
  renderMyLib('watched'); //рендер watched movies т.к. кнопка watched активна по умолчанию
  darkModeImageText();
}

onHomeBtnClick;

function onQueueBtnClick() {
  refs.queue.classList.add('library__btn--currently');
  refs.watched.classList.remove('library__btn--currently');
  renderMyLib('queue');
  darkModeImageText();
}

function onWatchedBtnClick() {
  if (!refs.watched.classList.contains('library__btn--currently')) {
    refs.watched.classList.add('library__btn--currently');
  }

  refs.queue.classList.remove('library__btn--currently');
  renderMyLib('watched');
  darkModeImageText();
}

function renderMyLib(localStorData) {
  const dataStore = localStorage.getItem(localStorData);
  if (!dataStore) {
    refs.containerMovies.innerHTML = '';
    displayEmptyLib();
    Notify.info('There is no movies in your Library');
    return;
  }

  try {
    refs.containerMovies.innerHTML = '';
    const parseDataStore = JSON.parse(dataStore);
    const markup = renderMovie(parseDataStore, true);
    refs.containerMovies.insertAdjacentHTML('beforeend', markup);
    lazyLoad();
  } catch (error) {
    console.error(error);
  }
}

function renderMyLibOnCloseModal() {
  if (refs.library.classList.contains('nav__btn--currently')) {
    if (refs.watched.classList.contains('library__btn--currently')) {
      renderMyLib('watched');
      darkModeImageText();
    }
    if (refs.queue.classList.contains('library__btn--currently')) {
      renderMyLib('queue');
      darkModeImageText();
    }
  }
}

function displayEmptyLib() {
  refs.containerMovies.innerHTML = `<li class="center-img"><img src=${imgEmpty} alt="no-result-to-show" loading="lazy" class="emptyPicture" /></li>`;
}
Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'zoom',
  useIcon: false,
});

export {
  renderMyLib,
  onQueueBtnClick,
  onWatchedBtnClick,
  renderMyLibOnCloseModal,
  displayEmptyLib,
};
