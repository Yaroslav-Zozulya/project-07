import { refs } from './refs';
import renderMovie from './renderMovie';
import { onHomeBtnClick, onLibBtnClick } from './renderHeader';
import { Notify } from 'notiflix';

refs.home.addEventListener('click', onHomeBtnClick);
refs.library.addEventListener('click', onMyLibBtnClick);

function onMyLibBtnClick() {
  onLibBtnClick();
  renderMyLib('watched'); //рендер watched movies т.к. кнопка watched активна по умолчанию
}

function onQueueBtnClick() {
  refs.queue.classList.add('library__btn--currently');
  refs.watched.classList.remove('library__btn--currently');
  renderMyLib('queue');
}

function onWatchedBtnClick() {
  if (!refs.watched.classList.contains('library__btn--currently')) {
    refs.watched.classList.add('library__btn--currently');
  }

  refs.queue.classList.remove('library__btn--currently');
  renderMyLib('watched');
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
  } catch (error) {
    console.error(error);
  }
}

function renderMyLibOnCloseModal() {
  if (refs.library.classList.contains('nav__btn--currently')) {
    if (refs.watched.classList.contains('library__btn--currently')) {
      renderMyLib('watched');
    }
    if (refs.queue.classList.contains('library__btn--currently')) {
      renderMyLib('queue');
    }
  }
}

// function markupEmpty() {
//   return '<img src="./images/no-result-to-show.png" alt="no-result-to-show" loading="lazy" class="emptyPicture" />';
// }

function displayEmptyLib() {
  // const imgEl = document.createElement('img');
  // imgEl.src = './images/no-result-to-show.png';
  // imgEl.alt = 'no-result-to-show';
  // imgEl.className = 'emptyPicture';
  // refs.containerMovies.after(imgEl);

  refs.containerMovies.innerHTML =
    '<li><img src="./images/no-result-to-show.png" alt="no-result-to-show" loading="lazy" class="emptyPicture" /></li>';
}

export { renderMyLib, onQueueBtnClick, onWatchedBtnClick, renderMyLibOnCloseModal };
