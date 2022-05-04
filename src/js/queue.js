// добавляет фильм в список "Queue"
// список "Queue" есть массив с id фильмов
// принимает id фильма
function addToQueue(id) {
  // если в localStorage нет поля  'queue' то создаем его
  // и делаем в нем массив с id фильма
  if (!localStorage.hasOwnProperty('queue')) {
    localStorage.setItem('queue', JSON.stringify([id]));
  } else {
    // иначе добавляем в массив queue
    let queueList = JSON.parse(localStorage.getItem('queue'));
    if (!queueList.includes(id)) {
      queueList.push(id);
      localStorage.setItem('queue', JSON.stringify(queueList));
    }
  }
}
// проверяет есть ли фильм в списке "Queue"
// принимает id фильма
function checkinQueueList(id) {
  const queueList = JSON.parse(localStorage.getItem('queue'));
  return queueList.includes(id);
}
// удаляет фильм из "Queue"
function removeFromQueue(id) {
  let queueList = JSON.parse(localStorage.getItem('queue'));
  queueList.splice(queueList.indexOf(id), 1);
  localStorage.setItem('queue', JSON.stringify(queueList));
}

export { addToQueue, checkinQueueList, removeFromQueue };
