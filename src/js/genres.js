import genres from '../data/genres.json';

//Функції приймать масив індентифікаторів жінрів фільму

//Функція повертає масив об'єктів жанрів з полями id, name
function searchGenresInData(genre_ids) {
  return genre_ids.map(id => genres.genres.find(g => g.id === id));
}

//Функція повертає масив значень name жанрів
function genresFromIdToName(genres) {
  return genres.map(item => item.name);
}

//Функція повертає масив значень name жанрів. Якщо жанрів більше ніж 2, то повертаєтьсь
//масив з 3 значень, перші два занення це назви жанрів, третє значення Other
function genresOthers(genre_ids) {
  let genresItems = searchGenresInData(genre_ids);
  if (genresItems.length > 2) {
    let arr = genresItems.map(item => item.name).slice(0, 2);
    arr.push('Other');
    return arr;
  }
  return genresItems.map(item => item.name);
}

//При імпорті обв'язкові {}
export { genresFromIdToName, genresOthers };
