import { createPaginationConfig } from './createPaginationConfig';
import { checkTotalResults } from './checkTotalResults';
import { displayFilterMovie } from '../filter/displayFilterMovie';

export function filterPagination(data) {
  checkTotalResults(data);
  const pagination = createPaginationConfig(data);

  pagination.on('afterMove', event => {
    const page = event.page;
    displayFilterMovie(page);
  });

  return data;
}
