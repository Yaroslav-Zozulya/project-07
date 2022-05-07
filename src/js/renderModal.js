import API from './fetchAPI';
import markupModal from './markupModal';
import switcher from './modal-switcher';
const ref = {
  collectionMovie: document.querySelector('.collection'),
  modalBackdrop: document.querySelector('.film-modal__backdrop'),
  modal: document.querySelector('.film-modal__content'),
};

ref.collectionMovie.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName === 'UL') {
    return;
  }

  let idMovie = event.target.closest('.movie-card').dataset.id;

  API.getMovieById(idMovie)
    .then(data => markupModal(data))
    .then(appendModal)
    .then(ref.modalBackdrop.classList.remove('is-hidden'))
    .then(switcher(ref.modalBackdrop, ref.modal));
}

function appendModal(data) {
  ref.modal.insertAdjacentHTML('beforeend', data);
}
export default onOpenModal;
