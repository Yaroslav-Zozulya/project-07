// Функцию нужно вызвать при открытии модалки, ожидает ссылки на бекдроп, модалку, и кнопку закрытия
import { renderMyLibOnCloseModal } from './renderMyLib';
export default function modalСloser(backdropRefs, modalRefs, btnClose) {
  function closeModal() {
    backdropRefs.classList.add('is-hidden');
    modalRefs.innerHTML = '';
    renderMyLibOnCloseModal();
    global.isOpen = false;
  }

  const closeWithEsc = event => {
    const key = event.key;

    if (key === 'Escape') {
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
      closeModal();

      document.removeEventListener('keydown', closeWithEsc);
      backdropRefs.removeEventListener('click', closeWithBackdrop);
      btnClose.removeEventListener('click', closeWithBtn);
    }
  };

  const closeWithBtn = () => {
    closeModal();

    document.removeEventListener('keydown', closeWithEsc);
    backdropRefs.removeEventListener('click', closeWithBackdrop);
    btnClose.removeEventListener('click', closeWithBtn);
  };

  backdropRefs.addEventListener('click', closeWithBackdrop);
  document.addEventListener('keydown', closeWithEsc);
  btnClose.addEventListener('click', closeWithBtn);
}
