const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

alert("working");
