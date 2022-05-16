import refs from './refs';

import renderGenres from './renderGenres';
import renderDate from './renderDateFilter';
import renderRating from './renderRatingFilter';
import { getData } from './displayFilterMovie';

const selected_genres = [];
let date_query = '';
let rating_query = '';
let genres_query = '';

refs.filterMain.addEventListener('click', onDropdownOpen);

refs.containerGenres.addEventListener('click', onGenreBtnClick);

refs.filterBody.addEventListener('click', e => {
  if (
    e.target.classList.contains('filter__body') ||
    e.target.classList.contains('filter__content')
  ) {
    toggleDropdownHidden(e.currentTarget);
  }
});

refs.ratingList.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  document.querySelector('.rating__item--active')?.classList.remove('rating__item--active');
  e.target.classList.add('rating__item--active');

  changeTextExtraData(e.target);
  rating_query = e.target.dataset.query;
  setDataToRender();
});

refs.dateList.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  document.querySelector('.date__item--active')?.classList.remove('date__item--active');
  e.target.classList.add('date__item--active');

  changeTextExtraData(e.target);
  date_query = e.target.dataset.query;
  setDataToRender();
});

refs.clearFilter.addEventListener('click', e => {
  date_query = '';
  rating_query = '';
  genres_query = '';
  selected_genres.length = 0;
  document.querySelectorAll('.select__extra').forEach(item => (item.innerHTML = ''));
  document
    .querySelectorAll('.btn-genre--active')
    .forEach(item => item.classList.remove('btn-genre--active'));
  document.querySelector('.date__item--active')?.classList.remove('date__item--active');
  document.querySelector('.rating__item--active')?.classList.remove('rating__item--active');
  toggleDropdownHidden(e.target);
  setDataToRender();
});

function onDropdownOpen(e) {
  if (
    !e.target.classList.contains('select') &&
    !e.target.classList.contains('select__header') &&
    !e.target.classList.contains('select__text') &&
    !e.target.classList.contains('select__title') &&
    !e.target.classList.contains('select__extra') &&
    !e.target.classList.contains('select__icon') &&
    !e.target.classList.contains('select__svg') &&
    !e.target.classList.contains('filter__body')
  ) {
    return;
  }

  const select = e.target.closest('.select');
  const dropdown = select.querySelector('.select__dropdown');
  const header = select.querySelector('.select__header');
  const icon = select.querySelector('.select__svg');
  toggleDropdownHidden(dropdown);

  header.classList.toggle('select__header--active');
  dropdown.classList.toggle('is-hidden');
  icon.classList.toggle('select__svg--rotate');
  document.addEventListener('click', onDocumentClick);
  isClearActive();
}

function onGenreBtnClick({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const ACTIVE_CLASS = 'btn-genre--active';

  // Если жанр ещё не выбран, то вешаем класс и добавляем id жанра в массив
  if (!target.classList.contains(ACTIVE_CLASS)) {
    target.classList.add(ACTIVE_CLASS);
    selected_genres.push({ name: target.dataset.name, id: target.dataset.id });
    // Иначе удаляем класс, снимаем фокус с кнопки и удаляем id жанра из массива
  } else {
    target.classList.remove(ACTIVE_CLASS);
    target.blur();
    selected_genres.splice(
      selected_genres.findIndex(({ id }) => id === target.dataset.id),
      1,
    );
  }

  const genres_names = selected_genres.map(({ name }) => name).join(', ');
  const genres_ids = selected_genres.map(({ id }) => id).join(',');
  refs.genresExtra.textContent = genres_names;
  genres_query = `$&with_genres=${genres_ids}`;
  setDataToRender();
  isClearActive;
}

function toggleFilter() {
  document.querySelector('.select__dropdown:not(.is-hidden)')?.classList.add('is-hidden');
  document.querySelector('.select__header--active')?.classList.remove('select__header--active');
  document.querySelector('.select__svg--rotate')?.classList.remove('select__svg--rotate');
  isClearActive();
}

function onDocumentClick(event) {
  //Если кликаем НЕ по фильтру или его внутренним элементам, то скрываем фильтр и снимаем слушатель с документа.
  if (event.target !== refs.filterBody && !refs.filterContainer.contains(event.target)) {
    toggleFilter();
    document.removeEventListener('click', onDocumentClick);
  }
}

function setDataToRender() {
  getData(genres_query, date_query, rating_query);
  isClearActive();
}
//Змінює текст в p.select__extra
function changeTextExtraData(target) {
  const chosenDate = target.closest('.select').querySelector('.select__extra');
  chosenDate.innerHTML = target.textContent;
  isClearActive();
}

function toggleDropdownHidden(dropdown) {
  const dropdownContainesHiddenArr = [];

  refs.selectDropdownAll.forEach(elem => {
    if (elem !== dropdown) {
      dropdownContainesHiddenArr.push(elem.classList.contains('is-hidden'));
    } else {
      dropdownContainesHiddenArr.push(true);
    }
  });
  if (!dropdownContainesHiddenArr.every(e => e === true)) {
    refs.selectDropdownAll.forEach(elem => {
      if (!elem.classList.contains('is-hidden')) {
        elem
          .closest('.select')
          .querySelector('.select__header')
          .classList.toggle('select__header--active');
        elem.classList.toggle('is-hidden');
        elem
          .closest('.select')
          .querySelector('.select__svg')
          .classList.toggle('select__svg--rotate');
      }
    });
    document.removeEventListener('click', onDocumentClick);
  }
  isClearActive();
}

function isClearActive() {
  if (date_query === '' && rating_query === '' && !selected_genres.length) {
    refs.clearFilter.classList.add('filter__clear--notActive');
  } else {
    refs.clearFilter.classList.remove('filter__clear--notActive');
  }
  return;
}

export function filter() {
  renderDate();
  renderGenres();
  renderRating();
}

export function clearFilter() {
  date_query = '';
  rating_query = '';
  genres_query = '';
  selected_genres.length = 0;
  document.querySelectorAll('.select__extra').forEach(item => (item.innerHTML = ''));
  document
    .querySelectorAll('.btn-genre--active')
    .forEach(item => item.classList.remove('btn-genre--active'));
  document.querySelector('.date__item--active')?.classList.remove('date__item--active');
  document.querySelector('.rating__item--active')?.classList.remove('rating__item--active');
  document.removeEventListener('click', onDocumentClick);
  toggleFilter();
}
