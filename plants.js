const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-dots2",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-next2",
    prevEl: ".swiper-prev2",
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-dots3",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiper4 = new Swiper(".swiper4", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: false,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-dots4",
    clickable: true,
  },
});
