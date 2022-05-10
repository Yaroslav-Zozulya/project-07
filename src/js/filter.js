import renderDate from './renderDateFilter';
export default function filter() {
  const ref = {
    filterMain: document.querySelector('.filter__content'),
    selectDropdownAll: document.querySelectorAll('.select__dropdown'),
    openFilter: document.querySelector('.filter__primaryText'),
  };

  ref.filterMain.addEventListener('click', onDropdownOpen);

  ref.openFilter.addEventListener('click', e => {
    const filter = e.currentTarget.closest('.filter');
    const filterBody = filter.querySelector('.filter__body');
    filterBody.classList.toggle('is-hidden');
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
    }
  }
}
