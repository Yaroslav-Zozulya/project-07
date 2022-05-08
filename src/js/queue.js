// добавляет фильм в список "Queue"
// список "Queue" есть массив с с обьектами фильмов
// принимает обьект фильма
function addToQueue(movie) {
  // если в localStorage нет поля  'queue' то создаем его
  // и делаем в нем массив с  фильмом
  // queueList дополнительно хранит id фильмов для быстрой проверки
  if (!localStorage.hasOwnProperty('queue')) {
    const queueList = [movie.id];
    localStorage.setItem('queue', JSON.stringify([movie]));
    localStorage.setItem('queueList', JSON.stringify(queueList));
  } else {
    // иначе добавляем в массив queue
    // и id в массив queueList
    if (!isInQueue(movie.id)) {
      let queueList = JSON.parse(localStorage.getItem('queueList'));
      let queue = JSON.parse(localStorage.getItem('queue'));
      queue.push(movie);
      queueList.push(movie.id);
      localStorage.setItem('queue', JSON.stringify(queue));
      localStorage.setItem('queueList', JSON.stringify(queueList));
    }
  }
}
// проверяет есть ли фильм в списке "Queue"
// принимает id фильма
function isInQueue(id) {
  if (!localStorage.hasOwnProperty('queueList')) {
    return false;
  }
  const queueList = JSON.parse(localStorage.getItem('queueList'));
  return queueList.includes(id);
}
// удаляет фильм из "Queue"
// принимает id фильма
function removeFromQueue(id) {
  let queueList = JSON.parse(localStorage.getItem('queueList'));
  let queue = JSON.parse(localStorage.getItem('queue'));
  const index = queueList.indexOf(id);
  queueList.splice(index, 1);
  queue.splice(index, 1);
  localStorage.setItem('queue', JSON.stringify(queue));
  localStorage.setItem('queueList', JSON.stringify(queueList));
}

export { addToQueue, isInQueue, removeFromQueue };
