
export default function switcher(backdropRefs, modalRefs) {
  function toggleModal() {
    modalRefs.classList.toggle('is-hidden');
  }

  const closeWithEsc = event => {
    const key = event.key;

    if (key === 'Escape') {
      toggleModal();

      document.removeEventListener('keydown', closeWithEsc);
    } else {
      return;
    }
  };

  const closeWithBackdrop = event => {
    if (event.target === backdropRefs) {
      toggleModal();
    }
  };

  backdropRefs.addEventListener('click', closeWithBackdrop);

  document.addEventListener('keydown', closeWithEsc);
}
