// Функция должна вызываться после нажатия на иконку включения "ночного режима"

const footerRefs = document.querySelector('.footer');
const bodyRefs = document.querySelector('body');
const modalRefs = document.querySelector('.film-modal__content');
// Класс .dark-mode-icon нужно повесить на иконку "ночного режима"
const darkModeIcon = document.querySelector('.dark-mode-icon');

export default function darkModeToggle() {
  // Раскоментировать после появления иконки
  // darkModeIcon.classList.toggle('dark-mode-icon_style');
  bodyRefs.classList.toggle('dark-body');
  footerRefs.classList.toggle('dark-footer');
  modalRefs.classList.toggle('dark-modal');
}
