import { createPaginationConfig } from './createPaginationConfig';
import { checkTotalResults } from './checkTotalResults';
import { findMovies } from '../movie-by-word';

export function searchPagination(data) {
  checkTotalResults(data);
  const pagination = createPaginationConfig(data);
  pagination.on('afterMove', event => {
    const page = event.page;
    findMovies(page);
  });
  return data;
}
