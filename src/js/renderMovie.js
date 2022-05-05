import { genresOthers } from './genres';
// При визові ф-ції renderMovie передається першим параметром data, а другим якщо потрібнен рейтинг фільмів -  true.
function renderMovie(data) {
  return data.results.map(d => markUpMovie(d)).join(' ');
}
function markUpGenres(genre_ids) {
  return genresOthers(genre_ids)
    .map(genre => `<a href="" class="">${genre}</a>`)
    .join(', ');
}

function markUpMovie(
  { id, poster_path, title, genre_ids, release_date, vote_average },
  isRating = false,
) {
  let rating = isRating ? `<span class="movie-rating">${vote_average}</span>` : '';
  let genres = markUpGenres(genre_ids);
  return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link" >
                <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" loading="lazy" class="poster" />
                <div class="movie-info">
                    <h2>${title}</h2>
                    <p>${genres}</p>

                    <p>${release_date.substr(0, 4)}</p>
                    ${rating}                
                </div>
            </a>
         </li>`;
}

export default renderMovie;
