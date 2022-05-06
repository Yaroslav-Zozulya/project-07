import Pagination from 'tui-pagination';
import { refs } from './refs';

export const pagination = new Pagination(refs.pagination, {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 5,
});
