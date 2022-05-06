
// Запускать при открытии модалки

// Функция ожидает ссылку на бекдроп

export default function closer(backdropRefs) {

  const closeWithEsc = event => {
    const key = event.key;

    if (key === 'Escape') {
      backdropRefs.classList.add('is-hidden');

      document.removeEventListener('keydown', closeWithEsc);
    } else {
      return;
    }
  };

  const closeWithBackdrop = event => {
    if (event.target === backdropRefs) {
      backdropRefs.classList.add('is-hidden');
    }
  
  };

  backdropRefs.addEventListener('click', closeWithBackdrop);

  document.addEventListener('keydown', closeWithEsc);
}