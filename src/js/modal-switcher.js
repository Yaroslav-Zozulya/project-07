export default function switcher(backdropRefs, modalRefs) {
  function toggleModal() {
    backdropRefs.classList.add('is-hidden');
  }
  function clearModal() {
    modalRefs.innerHTML = '';
  }

  const closeWithEsc = event => {
    const key = event.key;

    if (key === 'Escape') {
      clearModal();
      toggleModal();

      document.removeEventListener('keydown', closeWithEsc);
    } else {
      return;
    }
  };

  const closeWithBackdrop = event => {
    if (event.target === backdropRefs) {
      clearModal();
      toggleModal();
    }
  };

  backdropRefs.addEventListener('click', closeWithBackdrop);

  document.addEventListener('keydown', closeWithEsc);
}
