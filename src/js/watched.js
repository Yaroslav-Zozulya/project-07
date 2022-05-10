// добавляет фильм в список "Посмотреть позже"
// список "Посмотреть позже" есть массив с обьектами фильмов
// принимает обьект фильма
function addToWatched({ id, poster_path, title, genres, release_date, vote_average }) {
  // если в localStorage нет поля  'watched' то создаем его
  // и делаем в нем массив с  фильмом
  let genre_ids = [];
  // в массив genre_ids добавляем id фильмов
  genres.map(genre => {
    genre_ids.push(genre.id);
  });
  const localMovie = {
    id: id,
    poster_path: poster_path,
    title: title,
    genre_ids: genre_ids,
    release_date: release_date,
    vote_average: vote_average,
    // isRating: movie.isRating,
  };

  if (!localStorage.hasOwnProperty('watched')) {
    localStorage.setItem('watched', JSON.stringify([localMovie]));
  } else {
    // иначе добавляем в массив watched
    if (!isInWatched(id)) {
      let watched = JSON.parse(localStorage.getItem('watched'));
      watched.push(localMovie);
      localStorage.setItem('watched', JSON.stringify(watched));
    }
  }
}
// проверяет есть ли фильм в списке "Посмотреть позже"
// принимает id фильма
function isInWatched(id) {
  if (!localStorage.hasOwnProperty('watched')) {
    return false;
  }
  const watched = JSON.parse(localStorage.getItem('watched'));
  let result = false;
  watched.map(movie => {
    if (movie.id === id) {
      result = true;
    }
  });
  return result;
}
// удаляет фильм из "Посмотреть позже"
// принимает id фильма
function removeFromWatched(id) {
  let watched = JSON.parse(localStorage.getItem('watched'));
  if (isInWatched(id)) {
    const index = watched.findIndex(movie => movie.id === id);
    watched.splice(index, 1);
    // если массив watched пустой - удаляем его
    if (watched.length === 0) {
      localStorage.removeItem('watched');
    } else {
      localStorage.setItem('watched', JSON.stringify(watched));
    }
  }
}

export { addToWatched, isInWatched, removeFromWatched };
