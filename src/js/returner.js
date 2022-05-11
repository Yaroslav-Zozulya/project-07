const arrowRefs = document.querySelector('.return-arrow');

export default function returner() {
  window.addEventListener('scroll', () => {
    let windowRelativeTop = document.documentElement.getBoundingClientRect().top;

    windowRelativeTop < -200
      ? arrowRefs.classList.remove('is-hidden-arrow')
      : arrowRefs.classList.add('is-hidden-arrow');
  });
  arrowRefs.addEventListener('click', () => {
    const windowRelativeTop = document.documentElement.getBoundingClientRect().top;
    window.scrollBy({
      top: windowRelativeTop,
      behavior: 'smooth',
    });
  });
}
