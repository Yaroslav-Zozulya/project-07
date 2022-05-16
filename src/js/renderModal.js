import API from './fetchAPI';
import markupModal from './markupModal';
import { darkModeModal } from '/js/darkMode';
import modalСloser from './modalCloser';
import { addToWatched, isInWatched, removeFromWatched } from './watched';
import { addToQueue, isInQueue, removeFromQueue } from './queue';
import { refs } from './refs';


const ref = {
  collectionMovie: document.querySelector('.collection'),
  modalBackdrop: document.querySelector('.film-modal__backdrop'),
  modal: document.querySelector('.film-modal__content'),
};

ref.collectionMovie.addEventListener('click', onOpenModal);



async function onOpenModal(event) {
  event.preventDefault();
  if (!global.isOpen) {
    global.isOpen = true;
    if (event.target.nodeName === 'UL') {
      return;
    }

    if (event.target.nodeName === 'UL') {
      return;
    }
    if (!event.target.closest('.movie-card')) {
      //исправлена ошибка null.dataset
      return;
    }
    let idMovie = event.target.closest('.movie-card').dataset.id;

    const dataMovie = await API.getMovieById(idMovie);
    const dataMarkup = await markupModal(dataMovie);
    const append = await appendModal(dataMarkup);

    ref.modalBackdrop.classList.remove('is-hidden');
    modalСloser(ref.modalBackdrop, ref.modal, document.querySelector('.btn-close'));

    /* --- Buttons ---- */
    const watchedBtn = document.querySelector('.modal_button.modal_button--orange');
    const queueBtn = document.querySelector('.modal_button.modal_button--white');
    watchedBtn.addEventListener('click', e => onBtnWatched(e, dataMovie));
    queueBtn.addEventListener('click', e => onBtnQueue(e, dataMovie));
  }
  darkModeModal()
}

function onBtnWatched(e, data) {
  if (isInWatched(data.id)) {
    removeFromWatched(data.id);
    e.currentTarget.textContent = 'add to Watched';
  } else {
    addToWatched(data);
    e.currentTarget.textContent = 'remove from Watched';
  }
}
function onBtnQueue(e, data) {
  if (isInQueue(data.id)) {
    removeFromQueue(data.id);
    e.currentTarget.textContent = 'add to Queue';
  } else {
    addToQueue(data);
    e.currentTarget.textContent = 'remove from Queue';
  }
}

function appendModal(data) {
  ref.modal.insertAdjacentHTML('beforeend', data);
  return data;
}
export default onOpenModal;
