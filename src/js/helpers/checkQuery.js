export default function checkQuery(name) {
  /*
   * Проверяем строку на  наличие символов кроме латинских букв
   * Если введены только латинские буквы возвращает true
   */
  let regexp = /^[a-zA-Z0-9]/i;
  return regexp.test(name);
}
