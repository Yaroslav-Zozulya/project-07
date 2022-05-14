import { genresFromIdToName } from './genres';
import { addToWatched, isInWatched, removeFromWatched } from './watched';
import { addToQueue, isInQueue, removeFromQueue } from './queue';

function isInWatchedList(id) {
  return isInWatched(id) ? 'remove from Watched' : 'add to Watched';
}
function isInQueueList(id) {
  return isInQueue(id) ? 'remove from Queue' : 'add to Queue';
}
function markupModal({
  id,
  poster_path,
  genres,
  overview,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
}) {
  const genresName = genresFromIdToName(genres).join(', ');
  const watched = isInWatchedList(id);
  const queue = isInQueueList(id);
  let poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://www.hpl24.pl/userdata/public/gfx/f6194102ce247a5d6891a7b039fc49ad.jpg';

  return `        
                <button class="film-modal__btn-close btn-close" type="button">
                    <svg class="modal__svg" width="30" height="30">
                        <symbol id="icon-close" viewBox="0 0 32 32">
                            <path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.1333" d="M8.533 8.533l14.933 14.933M8.533 23.467l14.933-14.933"></path>
                        </symbol>
                        <use href="#icon-close"></use>
                    </svg>
                </button>
                <picture>
                    <source
                        srcset="
                       ${poster}     1x,
                        ${poster} 2x
                        "
                        type="image/jpeg"
                    />

                    <img
                        src="${poster}"
                        alt="${original_title}"
                        loading="lazy"
                        class="film-modal__image"
                    />
                </picture>
                <div class="film-modal__information">
                    <h2 class="film-modal__title">${title.toUpperCase()}</h2>
                    <div class="film-modal__property-container">
                        <dl class="film-modal__property">
                            <dt class="film-modal__property-name">Vote / Votes</dt>
                            <dd class="film-modal__property-value">
                                <span class="film-modal__vote">${vote_average}</span><span class="film-modal__line">/</span
                                ><span class="film-modal__votes">${vote_count}</span>
                            </dd>
                        </dl>
                        <dl class="film-modal__property">
                            <dt class="film-modal__property-name">Popularity</dt>
                            <dd class="film-modal__property-value">${popularity}</dd>
                        </dl>
                        <dl class="film-modal__property">
                            <dt class="film-modal__property-name">Original Title</dt>
                            <dd class="film-modal__property-value">${original_title.toUpperCase()}</dd>
                        </dl>
                        <dl class="film-modal__property">
                            <dt class="film-modal__property-name">Genre</dt>
                            <dd class="film-modal__property-value">${genresName}</dd>
                        </dl>
                    </div>
                    <h3 class="film-modal__about">About</h3>
                    <p class="film-modal__text">
                        ${overview}
                    </p>
                    <ul class="film-modal__buttons-list">
                        <li class="film-modal__buttons-item">
                            <button class="modal_button modal_button--orange" type="button">${watched}</button>
                        </li>
                        <li class="film-modal__buttons-item">
                            <button class="modal_button modal_button--white" type="button">${queue}</button>
                        </li>
                    </ul>
                </div>          

  `;
}

export default markupModal;
