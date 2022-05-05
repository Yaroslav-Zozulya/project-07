
import renderMovie from './renderMovie';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import API from './fetchAPI';


const ref = {
    containerMovies: document.querySelector('.collection'),
    form: document.querySelector('.form'),
    input: document.querySelector('.form__input'),
};

ref.form.addEventListener('submit', onShowGalleryMovie);

function appendGallery(data) {
  ref.containerMovies.insertAdjacentHTML('beforeend', data);
}

function findMovies() {

    API.getMoviesByQuery(ref.input.value)
        .then(data => {
            if (data.results.length === 0) {
              Notify.failure("Search result not successful. Enter the correct movie name and");
              return;
            }
            return renderMovie(data);
                })
        .then(appendGallery)
        .catch(error => {
            console.log(error)
           })
    }

function onShowGalleryMovie(e) {
  e.preventDefault();
  const value = ref.input.value.trim();

    if (value) {
      ref.containerMovies.innerHTML = '';
        findMovies();
    }

}

export default onShowGalleryMovie;

