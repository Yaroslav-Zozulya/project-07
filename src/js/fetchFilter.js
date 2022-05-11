const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.themoviedb.org';
const AUTH_TOKEN = 'f954d1f327dcbc2e185dbd566025454c';
function fetchFilter(...args) {
  const query = args.join('');
  return axios.get(
    `3/discover/movie?api_key=${AUTH_TOKEN}&sort_by=popularity.desc&include_adult=false${query}`,
  );
}

export default fetchFilter;
