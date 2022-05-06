import { getMovieById } from './fetchAPI';
// добавляет фильм в список "Queue"
// список "Queue" есть массив с с обьектами фильмов
// принимает id фильма
function addToQueue(id) {
  // если в localStorage нет поля  'watched' то создаем его
  // и делаем в нем массив с  фильмом
  // watchedList дополнительно хранит id фильмов для быстрой проверки
  if (!localStorage.hasOwnProperty('queue')) {
    getMovieById(id).then(response => {
      const movie = response;
      const queueList = [id];
      localStorage.setItem('queue', JSON.stringify([movie]));
      localStorage.setItem('queueList', JSON.stringify(queueList));
    });
  } else {
    // иначе добавляем в массив queue
    // и id в массив watchedList

    if (!isInQueue(id)) {
      let queueList = JSON.parse(localStorage.getItem('queueList'));
      let queue = JSON.parse(localStorage.getItem('queue'));
      getMovieById(id).then(response => {
        const movie = response;
        queue.push(movie);
        queueList.push(id);
        localStorage.setItem('queue', JSON.stringify(queue));
        localStorage.setItem('queueList', JSON.stringify(queueList));
      });
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
function removeFromQueue(id) {
  if (isInQueue(id)) {
    let queueList = JSON.parse(localStorage.getItem('queueList'));
    let queue = JSON.parse(localStorage.getItem('queue'));
    const index = queueList.indexOf(id);
    queueList.splice(index, 1);
    queue.splice(index, 1);
    localStorage.setItem('queue', JSON.stringify(queue));
    localStorage.setItem('queueList', JSON.stringify(queueList));
  }
}

export { addToQueue, isInQueue, removeFromQueue };
