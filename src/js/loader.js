//Контейнер для лоадера
const refs = {
  container: document.querySelector('.gallery>.container'),
};

//Создание лоадера
const loader = document.createElement('div');
loader.classList.add('loader');
loader.innerHTML =
  '<div class="loader__inner"><div></div><div></div><div><div></div></div><div><div></div></div></div></div>';

//Добавляет лоадер в контейнер
function addLoader() {
  refs.container.prepend(loader);
}

//Удаляет лоадер из контейнера
function removeLoader() {
  loader.remove();
}

export default { addLoader, removeLoader };
