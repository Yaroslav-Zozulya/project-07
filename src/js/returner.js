const arrowRefs = document.querySelector('.return-arrow');

export default function returner() {
  const removeIsHidden = () => {
    let windowRelativeTop = document.documentElement.getBoundingClientRect().top;

    if (windowRelativeTop < -200) {
      arrowRefs.classList.remove('is-hidden');
      window.removeEventListener('scroll', removeIsHidden);
    }
  };

  const addIsHidden = () => {
    arrowRefs.classList.add('is-hidden');
    setTimeout(() => window.addEventListener('scroll', removeIsHidden), 2000);
  };

  window.addEventListener('scroll', removeIsHidden);
  arrowRefs.addEventListener('click', addIsHidden);
}
