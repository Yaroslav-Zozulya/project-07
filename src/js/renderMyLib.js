import renderMovie from 'renderMovie';
import { Notify } from 'notiflix';

const refs = {
  btnMyLib: document.querySelector('.nav__btn--currently'), //добавить класс в разметку что бы отличать Home/My Library
  containerMovies: document.querySelector('.collection'),
  btnWatched: document.querySelector('.watched'),
  btnQueue: document.querySelector('.queue'),
};

refs.btn.addEventListener('click', renderMyLib);

function isMyLibActive() {
  const isActiveBtnMyLib = refs.btn.classList.contains('myLib');
  if (isActiveBtnMyLib) {
  }
}

function getActiveBtn() {
  if (refs.btnWatched.classList.contains('active')) {
    renderMyLib(watched);
  }

  if (refs.btnQueue.classList.contains('active')) {
    renderMyLib(queue);
  }
}

function renderMyLib(localStorageData) {
  const dataStore = localStorage.getItem(localStorageData);
  if (!dataStore) {
    Notify.info('There is no any movies in your Library');
    return;
  }

  try {
    const parseDataStore = JSON.parse(dataStore);
    renderMovie(parseDataStore, true);
  } catch (error) {
    console.error(error);
  }
}

export default renderMyLib;
