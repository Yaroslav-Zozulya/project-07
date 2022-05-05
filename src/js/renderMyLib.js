import renderMovie from 'RenderMovie';
import { Notify } from 'notiflix';

const ref = {
  btn: document.querySelector(''),
};

ref.btn.addEventListener('click', renderMyLib);

function renderMyLib(localStorageData) {
  const dataStore = localStorage.getItem(localStorageData);
  if (!dataStore) {
    Notify.info('There is no any movies in your Library');
  }

  try {
    const parseDataStore = JSON.parse(dataStore);
    renderMovie(parseDataStore, true);
  } catch (error) {
    console.error(error);
  }
}

export default renderMyLib;
