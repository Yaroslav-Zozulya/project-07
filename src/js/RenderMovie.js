/* 
1. Потрібно створити екземпляр класу. Наприклад(
    let renderMovie = new RenderMovie({
            container_link: ref.containerMovies,      /////// посилання на контейнер в який буде рендеритись розмітка
            isRating: true,                            ////// Якщо потрібен в розмітці рейтинг передаєте цей парамент як true
        });
    )

2. Щоб отримати розмітку достатнього передати дані в метод render. 
        data => {
            renderMovie.render(data);
        }
        Обов'язково робити так, оскільки грає роль this.
3. Якщо потрібно очистити контейнер, наприклад при пагінації, метод clearGallery
*/
class RenderMovie {
  constructor({ container_link, isRating = false }) {
    this.container = container_link;

    this.isRating = isRating;
  }

  render(data) {
    const movies = data.results
      .map(d => {
        return this.markup(d);
      })
      .join(' ');

    this.appendGallery(movies);
  }

  markup({ id, poster_path, title, genre_ids, release_date, vote_average }) {
    let rating = this.isRating ? `<span class="movie-rating">${vote_average}</span>` : '';
    return `<li class="movie-card" data-id=${id}>
            <a href="" class="movie-link" >
                <img src="${poster_path}" alt="${title}" loading="lazy" class="poster" />
                <div class="movie-info">
                    <h2>"${title}"</h2>
                    <p>"${genre_ids}"</p>
                    <p>"${release_date}"</p>
                    ${rating}                
                </div>
            </a>
         </li>`;
  }
  clearGallery = () => (this.container.innerHTML = '');
  appendGallery(data) {
    this.container.insertAdjacentHTML('beforeend', data);
  }
}

export default RenderMovie;
