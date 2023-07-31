const slider = () => {
    new Swiper(".testimonials__slider-wrapper", {
        navigation: {
          nextEl: ".testimonials__next",
          prevEl: ".testimonials__prev",
        },
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
      
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      });
}

export default slider;