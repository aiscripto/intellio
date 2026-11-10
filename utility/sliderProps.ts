import SwiperCore from "swiper";
import {
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from "swiper/modules";
SwiperCore.use([
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
]);

export const sliderProps = {
  brandSlider: {
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
      1920: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonial: {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  },
  testimonial2: {
    speed: 1500,
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
      1920: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  },
  testimonial3: {
    speed: 1000,
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    spaceBetween: 20,
    breakpoints: {
      1920: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
};
