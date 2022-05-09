
import { refs } from './refs';


refs.home.addEventListener('click', onHomeBtnClick);
refs.library.addEventListener('click', onLibBtnClick);
refs.logo.addEventListener('click', onHomeBtnClick);

function onHomeBtnClick() {
  refs.formEl.reset();
 

  refs.home.classList.add('nav__btn--currently');
  refs.library.classList.remove('nav__btn--currently');
  refs.header.classList.remove('header--library');
  refs.librarySection.classList.add('visually-hidden');
  refs.formEl.classList.remove('visually-hidden');
  
}

function onLibBtnClick() {
  
  
  refs.home.classList.remove('nav__btn--currently');
  refs.library.classList.add('nav__btn--currently');
  refs.header.classList.add('header--library');
  refs.watched.classList.add('library__btn--currenly');
  refs.queue.classList.remove('library__btn--currenly');
  refs.formEl.classList.add('visually-hidden');
}

