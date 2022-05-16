import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { refs } from '../refs';

export function createPaginationConfig(data) {
  let { page, total_results } = data;
  let currentPage = 3;
  localStorage.setItem(currentPage, page);

  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: page,
  };

  return new Pagination(refs.pagination, options);
}
