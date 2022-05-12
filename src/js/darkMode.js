// Функция должна вызываться после нажатия на иконку включения "ночного режима"

const footerRef = document.querySelector('.footer');
const bodyRef = document.querySelector('body');
const modalRef = document.querySelector('.film-modal__content');
const modalTeamHeaderRef = document.querySelector('.header-item');
const modalTeamCardRef = document.querySelectorAll('.team__card');
const modalTeamSocialRef = document.querySelectorAll('.social-list__link');
const darkModeIcon = document.querySelector('.dark-mode-icon');

let darkModeOn = false;

function darkModeImageText() {
  if (darkModeOn === true) {
    const imageCardTextRef = document.querySelectorAll('.movie-title');

    const arrayImageCardTextRef = [...imageCardTextRef];
    arrayImageCardTextRef.map(title => title.classList.toggle('dark-modal-image-card-text'));
  }
}

function darkMode() {
  const imageCardTextRef = document.querySelectorAll('.movie-title');

  const arrayImageCardTextRef = [...imageCardTextRef];

  const arrayModalTeamCardRef = [...modalTeamCardRef];
  const arrayModalTeamSocialRef = [...modalTeamSocialRef];

  darkModeIcon.classList.toggle('dark-mode-icon_style');
  bodyRef.classList.toggle('dark-body');
  footerRef.classList.toggle('dark-footer');
  modalRef.classList.toggle('dark-modal');
  modalTeamHeaderRef.classList.toggle('dark-modal-header-team');

  arrayModalTeamCardRef.map(card => card.classList.toggle('dark-modal-card-team'));
  arrayModalTeamSocialRef.map(icon => icon.classList.toggle('dark-modal-social-list__item'));
  arrayImageCardTextRef.map(title => title.classList.toggle('dark-modal-image-card-text'));

  darkModeOn === false ? (darkModeOn = true) : (darkModeOn = false);
}

export { darkMode, darkModeImageText };
