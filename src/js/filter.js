import renderGenres from './renderGenres';
import renderDate from './renderDateFilter';
import renderRating from './rendeRatingFilter';
import filterMovie from './displayFilterMovie';
export default function filter() {
  const ref = {
    filterMain: document.querySelector('.filter__content'),
    filterBody: document.querySelector('.filter__body'),
    selectDropdownAll: document.querySelectorAll('.select__dropdown'),
    openFilter: document.querySelector('.filter__primaryText'),
    containerGenres: document.querySelector('.filter__swiper-wrapper'),
    genresExtra: document.querySelector('.genres__extra'),
    ratingList: document.querySelector('.rating__list'),
    dateList: document.querySelector('.date__list'),
    clearFilter: document.querySelector('.filter__clear'),
  };

  const selected_genres = [];
  let date_query = '';
  let rating_query = '';
  let genres_query = '';

  renderDate();
  renderGenres();
  renderRating();

  ref.filterMain.addEventListener('click', onDropdownOpen);

  ref.openFilter.addEventListener('click', e => {
    const filter = e.currentTarget.closest('.filter');
    const filterBody = filter.querySelector('.filter__body');
    filterBody.classList.toggle('is-hidden');
    e.currentTarget.classList.toggle('filter__primaryText--active');
    isClearActive();
  });

  ref.containerGenres.addEventListener('click', ({ target }) => {
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
    ref.genresExtra.textContent = genres_names;
    genres_query = `$&with_genres=${genres_ids}`;
    setDataToRender();
  });

  ref.filterBody.addEventListener('click', e => {
    if (
      e.target.classList.contains('filter__body') ||
      e.target.classList.contains('filter__content')
    ) {
      toggalDropdownHidden(e.currentTarget);
    }
  });

  ref.ratingList.addEventListener('click', e => {
    if (e.target.nodeName !== 'LI') {
      return;
    }
    changeTextExtraData(e.target);
    rating_query = e.target.dataset.query;
    setDataToRender();
  });

  ref.dateList.addEventListener('click', e => {
    if (e.target.nodeName !== 'LI') {
      return;
    }
    changeTextExtraData(e.target);
    date_query = e.target.dataset.query;
    setDataToRender();
  });

  ref.clearFilter.addEventListener('click', e => {
    date_query = '';
    rating_query = '';
    genres_query = '';
    selected_genres.length = 0;
    document.querySelectorAll('.select__extra').forEach(item => (item.innerHTML = ''));
    setDataToRender();
  });

  function setDataToRender() {
    filterMovie(genres_query, date_query, rating_query);
    isClearActive();
  }
  //Змінює текст в p.select__extra
  function changeTextExtraData(target) {
    const chosenDate = target.closest('.select').querySelector('.select__extra');
    chosenDate.innerHTML = target.textContent;
    isClearActive();
  }

  function toggalDropdownHidden(dropdown) {
    const dropdownContainesHiddenArr = [];

    ref.selectDropdownAll.forEach(elem => {
      if (elem !== dropdown) {
        dropdownContainesHiddenArr.push(elem.classList.contains('is-hidden'));
      } else {
        dropdownContainesHiddenArr.push(true);
      }
    });
    if (!dropdownContainesHiddenArr.every(e => e === true)) {
      ref.selectDropdownAll.forEach(elem => {
        if (!elem.classList.contains('is-hidden')) {
          elem.classList.toggle('is-hidden');
          elem
            .closest('.select')
            .querySelector('.select__svg')
            .classList.toggle('select__svg--rotate');
        }
      });
    }
    isClearActive();
  }

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
    const icon = select.querySelector('.select__svg');
    toggalDropdownHidden(dropdown);

    dropdown.classList.toggle('is-hidden');
    icon.classList.toggle('select__svg--rotate');
    isClearActive();
  }

  function isClearActive() {
    if (date_query === '' && rating_query === '' && genres_query === '') {
      ref.clearFilter.classList.add('filter__clear--notActive');
    } else {
      ref.clearFilter.classList.remove('filter__clear--notActive');
    }
    return;
  }
}
