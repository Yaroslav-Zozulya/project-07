export function lazyLoad() {
  document.addEventListener('DOMContentLoaded', function () {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          console.log('lazy loading ', lazyImage);
          lazyImage.srcset = lazyImage.dataset.src;
          //   let test = lazyImage.querySelector('img');
          //   console.log(test);
          lazyImage.classList.remove('lzy_img');
          imgObserver.unobserve(lazyImage);
        }
      });
    });
    const arr = document.querySelectorAll('source.lzy_img');
    arr.forEach(v => {
      imageObserver.observe(v);
    });
  });
}
