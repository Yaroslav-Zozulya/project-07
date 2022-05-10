import { refs } from './refs';

function onHomeBtnClick() {
  refs.formEl.reset();
 
export function onHomeBtnClick() {

  refs.home.classList.add('nav__btn--currently');
  refs.library.classList.remove('nav__btn--currently');
  refs.header.classList.remove('header--library');
  refs.librarySection.classList.add('visually-hidden');
  refs.formEl.classList.remove('visually-hidden');
}

export function onLibBtnClick() {

  refs.home.classList.remove('nav__btn--currently');
  refs.library.classList.add('nav__btn--currently');
  refs.header.classList.add('header--library');
  refs.watched.classList.add('library__btn--currenly');
  refs.queue.classList.remove('library__btn--currenly');
  refs.formEl.classList.add('visually-hidden');
  refs.librarySection.classList.remove('visually-hidden');
}
