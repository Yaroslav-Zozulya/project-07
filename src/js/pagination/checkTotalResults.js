export function checkTotalResults(data) {
  if (data.total_results < 20) {
    document.querySelector('.container_pagination').classList.add('visually-hidden');
    return data;
  }
  document.querySelector('.container_pagination').classList.remove('visually-hidden');
}
