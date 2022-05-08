import { genresOthers } from './genres';

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
  return data.results.map(d => markUpMovie(d, isRating)).join(' ');
}

export default renderMovie;
