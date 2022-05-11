import renderGenres from './renderGenres';
import renderDate from './renderDateFilter';
export default function filter() {
  const ref = {
    filterMain: document.querySelector('.filter__content'),
    selectDropdownAll: document.querySelectorAll('.select__dropdown'),
    openFilter: document.querySelector('.filter__primaryText'),
    containerGenres: document.querySelector('.swiper-wrapper'),
  };

  const genres_ids = [];

  ref.filterMain.addEventListener('click', onDropdownOpen);

  ref.openFilter.addEventListener('click', e => {
    const filter = e.currentTarget.closest('.filter');
    const filterBody = filter.querySelector('.filter__body');
    filterBody.classList.toggle('is-hidden');
  });

  ref.containerGenres.addEventListener('click', ({ target }) => {
    if (target.nodeName !== 'BUTTON') {
      return;
    }

    const ACTIVE_CLASS = 'btn-genre--active';

    // Если жанр ещё не выбран, то вешаем класс и добавляем id жанра в массив
    if (!target.classList.contains(ACTIVE_CLASS)) {
      target.classList.add(ACTIVE_CLASS);
      genres_ids.push(target.dataset.id);
      return;
    }
    // Иначе удаляем класс, снимаем фокус с кнопки и удаляем id жанра из массива
    target.classList.remove(ACTIVE_CLASS);
    target.blur();
    genres_ids.splice(genres_ids.indexOf(target.dataset.id), 1);
  });

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
  }

  function onDropdownOpen(e) {
    if (
      !e.target.classList.contains('select') &&
      !e.target.classList.contains('select__header') &&
      !e.target.classList.contains('select__text') &&
      !e.target.classList.contains('select__title') &&
      !e.target.classList.contains('select__extra') &&
      !e.target.classList.contains('select__icon') &&
      !e.target.classList.contains('select__svg')
    ) {
      return;
    }

    const select = e.target.closest('.select');
    const dropdown = select.querySelector('.select__dropdown');
    const icon = select.querySelector('.select__svg');
    toggalDropdownHidden(dropdown);
    render(select);

    dropdown.classList.toggle('is-hidden');
    icon.classList.toggle('select__svg--rotate');
  }

  function render(select) {
    const dataSet = select.dataset.select;
    switch (dataSet) {
      case 'date': {
        renderDate();
      }
      case 'genres': {
        renderGenres();
      }
    }
  }
}
