// Функцию нужно вызвать при открытии модалки, ожидает ссылки на бекдроп, модалку, и кнопку закрытия

export default function modalСloser(backdropRefs, modalRefs, btnClose) {
  function closeModal() {
    backdropRefs.classList.add('is-hidden');
  }
  function clearModal() {
    modalRefs.innerHTML = '';
  }

  const closeWithEsc = event => {
    const key = event.key;

    if (key === 'Escape') {
      clearModal();
      closeModal();

      document.removeEventListener('keydown', closeWithEsc);
      backdropRefs.removeEventListener('click', closeWithBackdrop);
      btnClose.removeEventListener('click', closeWithBtn);
    } else {
      return;
    }
  };

  const closeWithBackdrop = event => {
    if (event.target === backdropRefs) {
      clearModal();
      closeModal();
      document.removeEventListener('keydown', closeWithEsc);
      backdropRefs.removeEventListener('click', closeWithBackdrop);
      btnClose.removeEventListener('click', closeWithBtn);
      console.log(btnClose);
    }
  };

  const closeWithBtn = () => {
    clearModal();
    closeModal();
    document.removeEventListener('keydown', closeWithEsc);
    backdropRefs.removeEventListener('click', closeWithBackdrop);
    btnClose.removeEventListener('click', closeWithBtn);
  };

  backdropRefs.addEventListener('click', closeWithBackdrop);
  document.addEventListener('keydown', closeWithEsc);
  btnClose.addEventListener('click', closeWithBtn);
}
