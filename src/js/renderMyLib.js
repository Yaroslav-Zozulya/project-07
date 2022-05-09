import { genresOthers } from './genres'; //test
// import renderMovie from './renderMovie';

import { Notify } from 'notiflix';

const refs = {
  btnMyLib: document.querySelector('.myLibrary'),
  containerMovies: document.querySelector('.collection'),
  btnWatched: document.querySelector('.watched'), //добавить в разметку класс "watched"
  btnQueue: document.querySelector('.queue'), //добавить в разметку класс "queue"
  watchedBtn: document.querySelector('.modal_button--orange'), //test
};

refs.btnMyLib.addEventListener('click', onMyLibBtnClick);
refs.btnWatched.addEventListener('click', onWatchedBtnClick);
refs.btnQueue.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', addToWatched); //test

function onMyLibBtnClick() {
  refs.containerMovies.innerHTML = '';

  if (!isActiveWatched()) {
    refs.btnWatched.classList.add('active');
  }
  refs.btnQueue.classList.remove('active');
  renderMyLib('watched', true); //рендер watched movies т.к. кнопка watched активна по умолчанию
}

function onQueueBtnClick() {
  refs.containerMovies.innerHTML = '';
  refs.btnQueue.classList.add('active');
  refs.btnWatched.classList.remove('active');
  renderMyLib('queue', true);
}

function onWatchedBtnClick() {
  refs.containerMovies.innerHTML = '';
  refs.btnWatched.classList.add('active');
  refs.btnQueue.classList.remove('active');

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

//===========================нужно переписать ф-цию

function markUpGenres(genre_ids) {
  return genresOthers(genre_ids)
    .map(genre => `<li class="movie-genres">${genre}</li>`)
    .join(' ');
}

function markUpMovie(
  { id, poster_path, title = 'None', genre_ids, release_date, vote_average },
  isRating,
) {
  let rating = isRating ? `<p class="movie-rating">${vote_average}</p>` : '';
  let genres = markUpGenres(genre_ids);
  let poster = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : 'https://www.hpl24.pl/userdata/public/gfx/f6194102ce247a5d6891a7b039fc49ad.jpg';
  return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link">
              <div class="poster-thumb">
                  <img src=${poster} alt="${title}" loading="lazy" class="poster"/>
              </div>
               
                <div class="movie-info">     
                    <h2 class="movie-title">${title}</h2>
                    <div class="movie-description">
                      <ul class="genres-list">
                      ${genres || 'None'}
                      </ul>
                      <p class="movie-date">${release_date ? release_date.substr(0, 4) : ''}</p>
                      ${rating}
                    </div>                                 
                </div>
            </a>
         </li>`;
}

// При визові ф-ції renderMovie передається першим параметром data, а другим якщо потрібнен рейтинг фільмів -  true.
function renderMovie(data, isRating = false) {
  return data.map(d => markUpMovie(d, isRating)).join(' '); //remove 'results'
}

export default renderMyLib;
