import renderMovie from 'renderMovie';
import { Notify } from 'notiflix';

const refs = {
  btnMyLib: document.querySelector('.myLibrary'), //добавить в разметку класс "home" и "myLibrary"
  containerMovies: document.querySelector('.collection'),
  btnWatched: document.querySelector('.watched'), //добавить в разметку класс "watched"
  btnQueue: document.querySelector('.queue'), //добавить в разметку класс "queue"
};

refs.btnMyLib.addEventListener('click', onMyLibBtnClick);
refs.btnWatched.addEventListener('click', onWatchedBtnClick);
refs.btnQueue.addEventListener('click', onQueueBtnClick);

//рендер watched movies т.к. кнопка watched активна по умолчанию
function onMyLibBtnClick() {
  refs.containerMovies.innerHTML('');

  if (!isActiveWatched()) {
    refs.btnWatched.classList.add('active');
  }
  refs.btnQueue.classList.remove('active');
  renderMyLib('watched');
}

function onQueueBtnClick() {
  refs.containerMovies.innerHTML('');
  refs.btnQueue.classList.add('active');
  refs.btnWatched.classList.remove('active');
  renderMyLib('queue');
}

function onWatchedBtnClick() {
  refs.btnWatched.classList.add('active');
  refs.btnQueue.classList.remove('active');
  refs.containerMovies.innerHTML('');
  renderMyLib('watched');
}

function isActiveWatched() {
  return refs.btnWatched.classList.contains('active');
}

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

export default renderMyLib;
