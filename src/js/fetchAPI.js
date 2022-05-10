const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.themoviedb.org';
const AUTH_TOKEN = 'f954d1f327dcbc2e185dbd566025454c';

function getMoviesByTrending(page = 1) {
  return axios
    .get(`/3/trending/movie/day?api_key=${AUTH_TOKEN}&page=${page}`)
    .then(response => response.data);
}

function getMoviesByQuery(query, page = 1) {
  return axios
    .get(
      `/3/search/movie?api_key=${AUTH_TOKEN}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`,
    )
    .then(response => response.data);
}

function getMovieById(id) {
  return axios
    .get(`/3/movie/${id}?api_key=${AUTH_TOKEN}&language=en-US`)
    .then(response => response.data);
}

export default { getMoviesByTrending, getMoviesByQuery, getMovieById };
