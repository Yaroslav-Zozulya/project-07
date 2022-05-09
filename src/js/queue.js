// добавляет фильм в список "Queue"
// список "Queue" есть массив с с обьектами фильмов
// принимает обьект фильма
function addToQueue(movie) {
  // если в localStorage нет поля  'queue' то создаем его
  // и делаем в нем массив с  фильмом

  if (!localStorage.hasOwnProperty('queue')) {
    localStorage.setItem('queue', JSON.stringify([movie]));
  } else {
    // иначе добавляем в массив queue
    if (!isInQueue(movie.id)) {
      let queue = JSON.parse(localStorage.getItem('queue'));
      queue.push(movie);
      localStorage.setItem('queue', JSON.stringify(queue));
    }
  }
}
// проверяет есть ли фильм в списке "Queue"
// принимает id фильма
function isInQueue(id) {
  if (!localStorage.hasOwnProperty('queue')) {
    return false;
  }
  const queue = JSON.parse(localStorage.getItem('queue'));
  let result = false;
  queue.map(movie => {
    if (movie.id === id) {
      result = true;
    }
  });
  return result;
}
// удаляет фильм из "Queue"
// принимает id фильма
function removeFromQueue(id) {
  let queue = JSON.parse(localStorage.getItem('queue'));
  if (isInQueue(id)) {
    const index = queue.findIndex(movie => movie.id === id);
    queue.splice(index, 1);
    // если массив queue пустой - удаляем его
    if (queue.length === 0) {
      localStorage.removeItem('queue');
    } else {
      localStorage.setItem('queue', JSON.stringify(queue));
    }
  }
}

export { addToQueue, isInQueue, removeFromQueue };
