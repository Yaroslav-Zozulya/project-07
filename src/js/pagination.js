import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs';
import API from './fetchAPI';
import renderMovie from './renderMovie';
import loader from './loader';

let currentPage = 1;

export const pagination = new Pagination(refs.pagination, {
  totalItems: 20000,
  itemsPerPage: 20,
  page: currentPage,
  visiblePages: 5,
  centerAlign: true,
});
  
pagination.on('afterMove', onPageMove);


function appendGallery(data) {
  refs.containerMovies.innerHTML = data;
}


function onPageMove(event) {
  currentPage = event.page;

 
    API.getMoviesByTrending(currentPage)
        .then(data => renderMovie(data, true))
        .then(appendGallery)
    .finally(loader.removeLoader);
  
  // pagination.setTotalItems(200);
  
};






