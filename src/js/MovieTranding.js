import axios from 'axios';

const URL = 'https://api.themoviedb.org';
const KEY = 'f954d1f327dcbc2e185dbd566025454c';
class MovieTranding {
  constructor() {
    this.page = 1;
    this.amountEl = 0;
  }

  async getTranding() {
    const response = await axios.get(
      `${URL}/3/trending/movie/day?api_key=${KEY}&page=${this.page}`,
    );
    const movie = await response.data;
    this.incrementPage();
    return movie;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  resentAmount() {
    this.amountEl = 0;
  }
}

export default MovieTranding;
