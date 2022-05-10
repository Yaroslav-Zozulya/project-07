 
const refs = {
    openModalBtn: document.querySelector('.footer-developed-by-link'),
    closeModalBtn: document.querySelector('.btn-close'),
    modalBackdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
  };

refs.openModalBtn.addEventListener('click', openModalTeam);
refs.closeModalBtn.addEventListener('click', modalClose);

function openModalTeam(event) {
    event.preventDefault();

    document.addEventListener('keydown', closeOnEsc);
    refs.modalBackdrop.addEventListener('click',   closeOnBackdrop);
    refs.modalBackdrop.classList.remove('is-hidden');
     }
     
function modalClose(event) {
    refs.modalBackdrop.classList.add('is-hidden');

}
 
function closeOnEsc(event) {
     const key = event.key;

    if (key === 'Escape') {
        refs.modalBackdrop.classList.add('is-hidden');
        document.removeEventListener('keydown', closeOnEsc);
    }
}

function closeOnBackdrop(event) {
    if (event.target === refs.modalBackdrop) {
         refs.modalBackdrop.classList.add('is-hidden');
 refs.modalBackdrop.removeEventListener('click',  closeOnBackdrop);
     }   
}

 export default openModalTeam;