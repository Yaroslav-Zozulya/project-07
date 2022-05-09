// добавляет фильм в список "Посмотреть позже"
// список "Посмотреть позже" есть массив с обьектами фильмов
// принимает обьект фильма
function addToWatched(movie) {
  // если в localStorage нет поля  'watched' то создаем его
  // и делаем в нем массив с  фильмом

  if (!localStorage.hasOwnProperty('watched')) {
    localStorage.setItem('watched', JSON.stringify([movie]));
  } else {
    // иначе добавляем в массив watched
    if (!isInWatched(movie.id)) {
      let watched = JSON.parse(localStorage.getItem('watched'));
      watched.push(movie);
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
