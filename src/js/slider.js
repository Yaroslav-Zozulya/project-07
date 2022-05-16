import API from './fetchAPI';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { refs } from './refs';
import onOpenModal from './renderModal';

Swiper.use([Pagination, Navigation, Autoplay]);



function murkUpSlider({ id, poster_path, vote_average, title }) {
   let poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://www.hpl24.pl/userdata/public/gfx/f6194102ce247a5d6891a7b039fc49ad.jpg';
        if (vote_average > 6) {
            return `<li class="swiper-item swiper-slide movie-card" data-id=${id}>
            <a href="" class="slider-link">
                     <picture>
                     <source
                      srcset="
                      ${poster }     1x,
                      ${poster } 2x
                       "
                       type="image/jpeg"
                    />
                    <img class="slider-image"
                        src="${poster }"
                        alt="${title}"
                        loading="lazy"
                    />
                 </picture>
            </a>
         </li>`
        }
}
    

function appendGallery(data) {
  refs.sliderList.innerHTML = data;
  const swiperSlider = new Swiper('.slider-swiper', {
  initialSlide :0,
  Observer: true, // При изменении самого swiper или его дочерних элементов swiper автоматически инициализируется   
  Parents: true, // Swiper автоматически инициализируется при изменении родительского элемента swiper
  onSlideChangeEnd: function(swiper){
        swiper.update (); // Обновляем Swiper, этот метод включает в себя методы updateContainerSize, updateSlidesSize, updateProgress, updatePagination, updateClasses. То есть изменение данных заключается в повторной инициализации свайпера;
       swiperSlider.startAutoplay (); // Перезапуск автоматического переключения;
        swiperSlider.reLoop (); // Пересчитываем количество слайдов, которые нужно зациклить. Это нужно, когда вы меняете параметр slidesPerView, и его нужно добавлять, когда вам нужно автоматически повернуть;
},
       loop: true,
       slidesPerView: 6,
       spaceBetween: 5,
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
  },
    on: {  
      init() { 
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
    }, 
  })
  
  swiperSlider.on('click', () => {
    refs.sliderList.addEventListener('click', onOpenModal);
});

}


function getFilmSlider() {
    
 if (window.innerWidth <= 768) {
     return;
  }   
  
    API.getMoviesByTrending()
        .then(data => {return renderMovie(data)})
      .then(appendGallery)
      .catch(error => {
        console.log(error);
      });
       
}

  
function renderMovie(data) {
  let dataRender = data.results || data;
    return dataRender.map(d => murkUpSlider(d)).join(' ');  
}


export default getFilmSlider;




