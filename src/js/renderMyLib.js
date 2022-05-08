// import renderMovie from 'renderMovie';
import { genresOthers } from './genres'; //test
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
  localStorage.setItem('watched', '123456789');
  refs.containerMovies.innerHTML('');
  if (!isActiveWatched()) {
    refs.btnWatched.classList.add('active');
  }
  refs.btnQueue.classList.remove('active');
  renderMyLib('watched', true); //рендер watched movies т.к. кнопка watched активна по умолчанию
}

function onQueueBtnClick() {
  refs.containerMovies.innerHTML('');
  refs.btnQueue.classList.add('active');
  refs.btnWatched.classList.remove('active');
  renderMyLib('queue', true);
}

function onWatchedBtnClick() {
  refs.containerMovies.innerHTML('');
  refs.btnWatched.classList.add('active');
  refs.btnQueue.classList.remove('active');
  renderMyLib('watched', true);
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

//====================================

function addToWatched() {
  const arr = {
    adult: false,
    backdrop_path: '/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg',
    belongs_to_collection: {
      id: 618529,
      name: 'Doctor Strange Collection',
      poster_path: '/bm7UlW3ctMJAvD6NNXrCDdRyyKn.jpg',
      backdrop_path: '/5ZuctJh5uX5L2dz1CjA7WsTJwZk.jpg',
    },
    budget: 200000000,
    genres: [
      { id: 14, name: 'Fantasy' },
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
    ],
    homepage: 'https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness',
    id: 453395,
    imdb_id: 'tt9419884',
    original_language: 'en',
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    popularity: 5201.375,
    poster_path: '/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg',
    production_companies: [
      {
        id: 420,
        logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
        name: 'Marvel Studios',
        origin_country: 'US',
      },
    ],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    release_date: '2022-05-04',
    revenue: 229300000,
    runtime: 126,
    spoken_languages: [
      { english_name: 'English', iso_639_1: 'en', name: 'English' },
      { english_name: 'Spanish', iso_639_1: 'es', name: 'Español' },
      { english_name: 'Cantonese', iso_639_1: 'cn', name: '广州话 / 廣州話' },
    ],
    status: 'Released',
    tagline: 'Enter a new dimension of Strange.',
    title: 'Doctor Strange in the Multiverse of Madness',
    video: false,
    vote_average: 7.6,
    vote_count: 809,
  };

  localStorage.setItem('watched', JSON.stringify(arr));
}

export default renderMyLib;
