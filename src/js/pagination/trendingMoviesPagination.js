import displayTrandingMovie from '../displayTrandingMovies';
import { createPaginationConfig } from './createPaginationConfig';
import { findMovies } from '../movie-by-word';
import { checkTotalResults } from './checkTotalResults';

export function trendingMoviesPagination(data) {
  checkTotalResults(data);
  const pagination = createPaginationConfig(data);

  pagination.on('afterMove', event => {
    const page = event.page;
    displayTrandingMovie(page);
  });

  return data;
}

export function searchPagination(data) {
  checkTotalResults(data);
  const pagination = createPaginationConfig(data);
  pagination.on('afterMove', event => {
    const page = event.page;
    findMovies(page);
  });

  return data;
}

// export default paginationInit;
// import renderMovie from './renderMovie';
// import loader from './loader';

// const LOCAL_STORAGE_KEY = 'current-page-save';

// const options = {
//   totalItems: 200,
//   itemsPerPage: 20,
//   page: 10,
//   visiblePages: 5,
//   centerAlign: true,

//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',

//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// export const pagination = new Pagination(refs.pagination, options);

// //вираховує к-ть сторінок відповідно до даних, що надходть з бд

// API.getMoviesByQuery()
//   .then(data => data.total_results)
//   .then(data => {
//     if (data <= 20) {
//       pagination.reset(1);
//       return;
//     }
//     return pagination.setTotalItems(data);
//   });

// // реалізує рендер фільмів посторінково

// pagination.on('after', onPageMove);

// function appendGallery(data) {
//   refs.containerMovies.innerHTML = data;
// }

// function onPageMove(event) {
//   currentPage = event.page;
//   localStorage.setItem(LOCAL_STORAGE_KEY, currentPage);

//   API.getMoviesByTrending(currentPage)
//     .then(data => renderMovie(data, true))
//     .then(appendGallery)
//     .finally(loader.removeLoader);
// }

// // API.getMoviesByTrending()
// //   .then(data => {
// //     console.log(data);

// //     if (data.total_pages <= 5) {
// //           return;
// //     }

// //     for (let i = 0; i <= data.total_pages; i += 1) {

// //       console.log(data.page[1]);

// //     }
