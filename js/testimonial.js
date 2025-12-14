// Initialize Testimonials Swiper
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".testimonials-swiper")) {
    const testimonialsSwiper = new Swiper(".testimonials-swiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,
      speed: 600,
      autoplay: false,
      pagination: {
        el: ".testimonials-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 40,
        },
      },
    });
  }

  // Initialize Service Images Swiper
  if (document.querySelector(".service-images-swiper")) {
    const serviceImagesSwiper = new Swiper(".service-images-swiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      speed: 600,
      autoplay: false,
      pagination: {
        el: ".service-images-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      },
    });
  }
});
