export function lazyLoad() {
  let imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.srcset = lazyImage.dataset.src;
        lazyImage.classList.remove('lzy_img');
        imgObserver.unobserve(lazyImage);
      }
    });
  });
  let arr = document.querySelectorAll('source.lzy_img');
  arr.forEach(v => {
    imageObserver.observe(v);
  });
}
