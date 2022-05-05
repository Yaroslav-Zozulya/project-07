import { getMovieById } from './fetchAPI';
// добавляет фильм в список "Посмотреть позже"
// список "Посмотреть позже" есть массив с обьектами фильмов
// принимает id фильма
function addToWatched(id) {
  // если в localStorage нет поля  'watched' то создаем его
  // и делаем в нем массив с  фильмом
  // watchedList дополнительно хранит id фильмов для быстрой проверки

  if (!localStorage.hasOwnProperty('watched')) {
    getMovieById(id).then(response => {
      const movie = response;
      const watchedList = [id];
      localStorage.setItem('watched', JSON.stringify([movie]));
      localStorage.setItem('watchedList', JSON.stringify(watchedList));
    });
  } else {
    // иначе добавляем в массив watched

    if (!isInWatched(id)) {
      let watchedList = JSON.parse(localStorage.getItem('watchedList'));
      let watched = JSON.parse(localStorage.getItem('watched'));
      getMovieById(id).then(response => {
        const movie = response;
        watched.push(movie);
        watchedList.push(id);
        localStorage.setItem('watched', JSON.stringify(watched));
        localStorage.setItem('watchedList', JSON.stringify(watchedList));
      });
    }
  }
}
// проверяет есть ли фильм в списке "Посмотреть позже"
// принимает id фильма
function isInWatched(id) {
  const watchedList = JSON.parse(localStorage.getItem('watchedList'));
  return watchedList.includes(id);
}
// удаляет фильм из "Посмотреть позже"
function removeFromWatched(id) {
  if (isInWatched(id)) {
    let watchedList = JSON.parse(localStorage.getItem('watchedList'));
    let watched = JSON.parse(localStorage.getItem('watched'));
    const index = watchedList.indexOf(id);
    watchedList.splice(index, 1);
    watched.splice(index, 1);
    localStorage.setItem('watched', JSON.stringify(watched));
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
  }
}

export { addToWatched, isInWatched, removeFromWatched };
