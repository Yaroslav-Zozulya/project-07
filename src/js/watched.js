// добавляет фильм в список "Посмотреть позже"
// список "Посмотреть позже" есть массив с обьектами фильмов
// принимает обьект фильма
function addToWatched(movie) {
  // если в localStorage нет поля  'watched' то создаем его
  // и делаем в нем массив с  фильмом
  // watchedList дополнительно хранит id фильмов для быстрой проверки

  if (!localStorage.hasOwnProperty('watched')) {
    const watchedList = [movie.id];
    localStorage.setItem('watched', JSON.stringify([movie]));
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
  } else {
    // иначе добавляем в массив watched
    if (!isInWatched(movie.id)) {
      let watchedList = JSON.parse(localStorage.getItem('watchedList'));
      let watched = JSON.parse(localStorage.getItem('watched'));
      watched.push(movie);
      watchedList.push(movie.id);
      localStorage.setItem('watched', JSON.stringify(watched));
      localStorage.setItem('watchedList', JSON.stringify(watchedList));
    }
  }
}
// проверяет есть ли фильм в списке "Посмотреть позже"
// принимает id фильма
function isInWatched(id) {
  if (!localStorage.hasOwnProperty('watchedList')) {
    return false;
  }
  const watchedList = JSON.parse(localStorage.getItem('watchedList'));
  return watchedList.includes(id);
}
// удаляет фильм из "Посмотреть позже"
// принимает id фильма
function removeFromWatched(id) {
  let watchedList = JSON.parse(localStorage.getItem('watchedList'));
  let watched = JSON.parse(localStorage.getItem('watched'));
  const index = watchedList.indexOf(id);
  watchedList.splice(index, 1);
  watched.splice(index, 1);
  localStorage.setItem('watched', JSON.stringify(watched));
  localStorage.setItem('watchedList', JSON.stringify(watchedList));
}

export { addToWatched, isInWatched, removeFromWatched };
