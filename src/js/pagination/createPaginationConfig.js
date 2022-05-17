import Pagination from 'tui-pagination';
import { refs } from '../refs';

export function createPaginationConfig(data) {
  let { page, total_results } = data;

  if (localStorage.hasOwnProperty('currentPage')) {
    page = Number(localStorage.getItem('currentPage'));
  }

  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: page,
  };

  return new Pagination(refs.pagination, options);
}
