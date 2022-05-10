import { refs } from './refs';
import renderMovie from './renderMovie';
import { onHomeBtnClick, onLibBtnClick } from './renderHeader';
import { Notify } from 'notiflix';

refs.home.addEventListener('click', onHomeBtnClick);
refs.library.addEventListener('click', onMyLibBtnClick);

function onMyLibBtnClick() {
  refs.containerMovies.innerHTML = '';

  // refs.watched.addEventListener('click', onWatchedBtnClick);
  // refs.queue.addEventListener('click', onQueueBtnClick);

  // if (!isActiveWatched()) {
  //   refs.watched.classList.add('.library__btn--currently');
  // }
  // refs.queue.classList.remove('.library__btn--currently');
  onLibBtnClick();
  renderMyLib('watched'); //рендер watched movies т.к. кнопка watched активна по умолчанию
}

function onQueueBtnClick() {
  refs.containerMovies.innerHTML = '';
  refs.queue.classList.add('.library__btn--currently');
  refs.watched.classList.remove('.library__btn--currently');
  renderMyLib('queue');
}

function onWatchedBtnClick() {
  refs.containerMovies.innerHTML = '';
  refs.watched.classList.add('.library__btn--currently');
  refs.queue.classList.remove('.library__btn--currently');
  renderMyLib('watched');
}

// function isActiveWatched() {
//   return refs.watched.classList.contains('.library__btn--currently');
// }

function renderMyLib(localStorData) {
  const dataStore = localStorage.getItem(localStorData);
  if (!dataStore) {
    Notify.info('There is no movies in your Library');
    return;
  }

  try {
    const parseDataStore = JSON.parse(dataStore);
    const markup = renderMovie(parseDataStore, true);
    refs.containerMovies.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error(error);
  }
}

function renderMyLibOnCloseModal() {
  if (refs.library.classList.contains('.library__btn--currently')) {
    if (refs.watched.classList.contains('.library__btn--currently')) {
      refs.containerMovies.innerHTML = '';
      renderMyLib('watched');
    }
    if (refs.queue.classList.contains('.library__btn--currently')) {
      refs.containerMovies.innerHTML = '';
      renderMyLib('queue');
    }
  }
}

export { renderMyLib, onQueueBtnClick, onWatchedBtnClick, renderMyLibOnCloseModal };
