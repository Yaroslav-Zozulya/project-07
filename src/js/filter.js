export default function filter() {
  const filterMain = document.querySelector('.filter__body');
  const openSelect = document.querySelector('.select__icon .select__svg');
  const openFilter = document.querySelector('.filter__primaryText');

  filterMain.addEventListener('click', e => {
    if (e.target.nodeName === 'UL') {
      return;
    }
    const select = e.target.closest('.select');
    const dropdown = select.querySelector('.select__dropdown');
    const icon = select.querySelector('.select__svg');
    dropdown.classList.toggle('is-hidden');
    icon.classList.toggle('select__svg--rotate');
    /*e.currentTarget.classList.toggle('select__svg--rotate');
    const select = e.currentTarget.closest('.select');
    const selectContent = select.querySelector('.select__dropdown');
    selectContent.classList.toggle('is-hidden');*/
  });
  openFilter.addEventListener('click', e => {
    const filter = e.currentTarget.closest('.filter');
    const filterBody = filter.querySelector('.filter__body');
    filterBody.classList.toggle('is-hidden');
  });
}