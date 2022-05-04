// добавляет фильм в список "Посмотреть позже"
// список "Посмотреть позже" есть массив с id фильмов
// принимает id фильма
function addToWatched(id) {
  // если в localStorage нет поля  'watched' то создаем его
  // и делаем в нем массив с id фильма
  if (!localStorage.hasOwnProperty('watched')) {
    localStorage.setItem('watched', JSON.stringify([id]));
  } else {
    // иначе добавляем в массив watched
    let watchedList = JSON.parse(localStorage.getItem('watched'));
    if (!watchedList.includes(id)) {
      watchedList.push(id);
      localStorage.setItem('watched', JSON.stringify(watchedList));
    }
  }
}
// проверяет есть ли фильм в списке "Посмотреть позже"
// принимает id фильма
function checkinWatchList(id) {
  const watchedList = JSON.parse(localStorage.getItem('watched'));
  return watchedList.includes(id);
}
// удаляет фильм из "Посмотреть позже"
function removeFromWatched(id) {
  let watchedList = JSON.parse(localStorage.getItem('watched'));
  watchedList.splice(watchedList.indexOf(id), 1);
  localStorage.setItem('watched', JSON.stringify(watchedList));
}

export { addToWatched, checkinWatchList, removeFromWatched };
