import { genresOthers } from './genres';

function markUpGenres(genre_ids) {
  return genresOthers(genre_ids)
    .map(genre => `<a href="" class="">${genre}</a>`)
    .join(', ');
}

function markUpMovie({ id, poster_path, title, genre_ids, release_date, vote_average }, isRating) {
  let rating = isRating ? `<span class="movie-rating">${vote_average}</span>` : '';
  let genres = markUpGenres(genre_ids);
  return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link" >
              <div class="poster-thumb">
                  <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" loading="lazy" class="poster"/>
              </div>
               
                <div class="movie-info">
                    <h2 class="movie-title">${title}</h2>
                    <div class="movie-description">
                      <p class="movie-genres">${genres}</p>
                      <p class="movie-date">${release_date.substr(0, 4)}</p>
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