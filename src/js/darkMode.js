const footerRef = document.querySelector('.footer');
const bodyRef = document.querySelector('body');
const modalRef = document.querySelector('.film-modal__content');
const darkModeIcon = document.querySelector('.dark-mode-icon');

function darkModeImageText() {
  const darkModeState = localStorage.getItem('darkModeState');

  if (darkModeState === 'On') {
    const imageCardTextRef = document.querySelectorAll('.movie-title');
    const arrayImageCardTextRef = [...imageCardTextRef];

    arrayImageCardTextRef.map(title => title.classList.toggle('dark-modal-image-card-text'));
  }
}

function darkModeModal() {
  const darkModeState = localStorage.getItem('darkModeState');

  if (darkModeState === 'On') {
    modalRef.classList.add('dark-modal');
    document.querySelector('.modal__svg').classList.add('dark-modal-icon-close');
    document.querySelector('.film-modal__title').classList.add('dark-modal-title');
    document.querySelector('.film-modal__text').classList.add('dark-modal-title');
    document.querySelector('.film-modal__votes').classList.add('dark-modal-votes');
    document.querySelector('.modal_button--white').classList.add('dark-modal-button-white');

    [...document.querySelectorAll('.film-modal__property-name')].map(property =>
      property.classList.add('dark-modal-property-name'),
    );
  }
}

function darkModeCheck() {
  const darkModeState = localStorage.getItem('darkModeState');

  if (darkModeState === 'On') {
    darkModeSwitch();
  }
}

function darkModeSwitch() {
  const imageCardTextRef = document.querySelectorAll('.movie-title');

  darkModeIcon.classList.toggle('dark-mode-icon_style');
  bodyRef.classList.toggle('dark-body');
  footerRef.classList.toggle('dark-footer');
  modalRef.classList.toggle('dark-modal');

  [...imageCardTextRef].map(title => title.classList.toggle('dark-modal-image-card-text'));
}

function darkModeTeamModal() {
  const darkModeState = localStorage.getItem('darkModeState');
  const modalTeamCardRef = document.querySelectorAll('.team__card');
  const modalTeamSocialRef = document.querySelectorAll('.social-list__link');

  if (darkModeState === 'On') {
    document.querySelector('.header-item').classList.add('dark-modal-header-team');

    [...modalTeamCardRef].map(card => card.classList.add('dark-modal-card-team'));
    [...modalTeamSocialRef].map(icon => icon.classList.add('dark-modal-social-list__item'));
  } else {
    document.querySelector('.header-item').classList.remove('dark-modal-header-team');

    [...modalTeamCardRef].map(card => card.classList.remove('dark-modal-card-team'));
    [...modalTeamSocialRef].map(icon => icon.classList.remove('dark-modal-social-list__item'));
  }
}

function darkMode() {
  const darkModeState = localStorage.getItem('darkModeState');

  darkModeSwitch();

  darkModeState === null || darkModeState === 'Off'
    ? localStorage.setItem('darkModeState', 'On')
    : localStorage.setItem('darkModeState', 'Off');
}

export { darkMode, darkModeImageText, darkModeCheck, darkModeModal, darkModeTeamModal };
