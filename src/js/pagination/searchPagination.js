import { findMovies } from '../movie-by-word';
import { checkTotalResults } from './checkTotalResults';
import { createPaginationConfig } from './createPaginationConfig';

export function searchPagination(data) {
  checkTotalResults(data);
  
  localStorage.removeItem('currentPage');
  const pagination = createPaginationConfig(data);
  pagination.on('afterMove', event => {
    const page = event.page;
    findMovies(page);
  });
  return data;
}
