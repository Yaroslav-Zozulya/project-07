import { refs } from './refs';

export default function returner() {
  window.addEventListener('scroll', () => {
    let windowRelativeTop = document.documentElement.getBoundingClientRect().top;

    windowRelativeTop < -200
      ? refs.arrowRefs.classList.remove('is-hidden-arrow')
      : refs.arrowRefs.classList.add('is-hidden-arrow');
  });
  refs.arrowRefs.addEventListener('click', () => {
    const windowRelativeTop = document.documentElement.getBoundingClientRect().top;
    window.scrollBy({
      top: windowRelativeTop,
      behavior: 'smooth',
    });
  });
}
