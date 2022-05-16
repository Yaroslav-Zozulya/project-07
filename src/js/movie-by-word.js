import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { displayEmptyLib } from './renderMyLib';
import renderMovie from './renderMovie';
import API from './fetchAPI';
import checkQuery from './helpers/checkQuery';
import loader from './loader';
import { refs } from './refs';
import { darkModeImageText } from '/js/darkMode';



function appendGallery(data) {
  refs.containerMovies.innerHTML = data;
  darkModeImageText()
}

function findMovies() {
  refs.containerMovies.innerHTML = '';
  loader.addLoader();
  API.getMoviesByQuery(refs.input.value)
    .then(data => {
      if (data.results.length === 0) {
        Notify.failure('Search result not successful. Enter the correct movie name and');
        return;
      }
      return renderMovie(data);
    })
    .then(data => {
      if (data === undefined) {
        displayEmptyLib();
        return;
      }
      appendGallery();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(loader.removeLoader);
    
}

function onShowGalleryMovie(event) {
  event.preventDefault();


  const value = refs.input.value.trim();

  if (!checkQuery(value)) {
    Notify.failure('Enter only A-z letters or numbers, please');
    return;
  }
  findMovies();
}

export default onShowGalleryMovie;

