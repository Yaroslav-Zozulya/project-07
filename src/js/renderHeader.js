import { refs } from './refs';
import { onQueueBtnClick, onWatchedBtnClick } from './renderMyLib';
import { clearFilter } from './filter/filter';

export function onHomeBtnClick() {
  refs.home.classList.add('nav__btn--currently');
  refs.library.classList.remove('nav__btn--currently');
  refs.header.classList.remove('header--library');
  refs.librarySection.classList.add('visually-hidden');
  refs.formEl.classList.remove('visually-hidden');
  refs.watched.removeEventListener('click', onWatchedBtnClick);
  refs.queue.removeEventListener('click', onQueueBtnClick);
  refs.sliderSection.classList.remove('is-hidden');

  clearFilter();
  refs.filter.classList.remove('visually-hidden');
}

export function onLibBtnClick() {
  refs.paginationContainer.classList.add('visually-hidden');
  refs.home.classList.remove('nav__btn--currently');
  refs.library.classList.add('nav__btn--currently');
  refs.header.classList.add('header--library');
  refs.watched.classList.add('library__btn--currently');
  refs.queue.classList.remove('library__btn--currently');
  refs.formEl.classList.add('visually-hidden');
  refs.librarySection.classList.remove('visually-hidden');
  refs.filter.classList.add('visually-hidden');
  refs.watched.addEventListener('click', onWatchedBtnClick);
  refs.queue.addEventListener('click', onQueueBtnClick);
  refs.logo.addEventListener('click', onHomeBtnClick);
}
