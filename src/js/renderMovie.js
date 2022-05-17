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
  let poster;
  let posterOrigin;

  poster_path
    ? ((poster = `https://image.tmdb.org/t/p/w500${poster_path}`),
      (posterOrigin = `https://image.tmdb.org/t/p/original${poster_path}`))
    : ((poster = `https://www.hpl24.pl/userdata/public/gfx/f6194102ce247a5d6891a7b039fc49ad.jpg`),
      (posterOrigin = `https://www.hpl24.pl/userdata/public/gfx/f6194102ce247a5d6891a7b039fc49ad.jpg`));

  return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link">
              

              <picture class="poster-thumb">
                  
        <source class="lzy_img" media="(min-width: 1200px)" 
        srcset=""  type="image/jpeg" width="310" height="450"  data-src="${poster} 1x,${poster} 2x">
                                                       
      
        <source class="lzy_img" media="(min-width: 768px)"
         srcset=""  type="image/jpeg" width="335" height="455"  data-src= "${poster} 1x,${poster} 2x">
                                                                    
                                            
        <source class="lzy_img" media="(max-width: 767px)"
         srcset=""  type="image/jpeg" width="280" height="400"  data-src= "${poster} 1x,${poster} 2x">
                                               

                    <img
                        src="#"
                        alt="${title}"
                        loading="lazy"
                        class="poster" 
                    />
                </picture>
               
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
  let dataRender = data.results || data;
  return dataRender.map(d => markUpMovie(d, isRating)).join(' ');
}

export default renderMovie;
