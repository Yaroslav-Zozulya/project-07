import { createPaginationConfig } from './createPaginationConfig';
import { checkTotalResults } from './checkTotalResults';
import { findMovies } from '../movieByWord';

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
