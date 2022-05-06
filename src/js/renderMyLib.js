import renderMovie from 'renderMovie';
import { Notify } from 'notiflix';

const refs = {
  btnMyLib: document.querySelector('.myLibrary'), //добавить класс в разметку что бы отличать Home/My Library
  containerMovies: document.querySelector('.collection'),
  btnWatched: document.querySelector('.watched'),
  btnQueue: document.querySelector('.queue'),
};

refs.btnMyLib.addEventListener('click', onMyLibBtnClick);
refs.btnWatched.addEventListener('click', onWatchedBtnClick);
refs.btnQueue.addEventListener('click', onQueueBtnClick);

function onMyLibBtnClick() {
  if (isMyLibActive()) {
    getActiveBtn(refs.btnWatched, refs.btnQueue);
    refs.btnMyLib.classList.add('nav__btn--currently');
    // refs.home.classList.remove('nav__btn--currently');прописать ref кнопки Home
  }
}

function isMyLibActive() {
  return refs.btnMyLib.classList.contains('nav__btn--currently');
}

function onWatchedBtnClick(evt) {
  if (evt.target.classList.contains('active')) {
    return;
  }

  evt.target.classList.add('active');
  evt.target.nextSibling.classList.remove('active');
  renderMyLib('watched');
}

function onQueueBtnClick(evt) {
  if (evt.target.classList.contains('active')) {
    return;
  }
  evt.target.classList.add('active');
  evt.target.previousSibling.classList.remove('active');
  renderMyLib('queue');
}

function getActiveBtn(btnWatched, btnQueue) {
  if (btnWatched.classList.contains('active')) {
    renderMyLib('watched');
  }

  if (btnQueue.classList.contains('active')) {
    renderMyLib('queue');
  }
}

function renderMyLib(localStorData) {
  const dataStore = localStorage.getItem(localStorData);
  if (!dataStore) {
    Notify.info('There is no any movies in your Library');
    return;
  }

  try {
    const parseDataStore = JSON.parse(dataStore);
    const markup = renderMovie(parseDataStore, true);
    refs.containerMovies.innerHTML('');
    refs.containerMovies.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error(error);
  }
}

export default renderMyLib;
