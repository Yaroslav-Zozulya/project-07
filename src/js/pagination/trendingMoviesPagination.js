import { createPaginationConfig } from './createPaginationConfig';
import { checkTotalResults } from './checkTotalResults';
import displayTrandingMovie from '../displayTrandingMovies';

export function trendingMoviesPagination(data) {
  checkTotalResults(data);
  const pagination = createPaginationConfig(data);

  pagination.on('afterMove', event => {
    const page = event.page;
    localStorage.setItem('currentPage', page);
    displayTrandingMovie(page);
  });

  return data;
}
