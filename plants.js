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
  spaceBetween: 10,

  pagination: {
    el: ".swiper-dots4",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

let faqCollapse = document.querySelectorAll(".faq-collapse");
let faqCollapseHead = document.querySelectorAll(".faq-collapse-head");
let faqCross = document.querySelectorAll(".faq-expand-icon");

faqCollapse.forEach((item, i) => {
  item.addEventListener("show.bs.collapse", (event) => {
    faqCollapseHead[i].style.backgroundColor = "#00730c";
    faqCollapseHead[i].style.color = "white";

    faqCross[i].classList.add("fa-xmark");
    faqCross[i].classList.remove("fa-plus");
  });
});

faqCollapse.forEach((item, i) => {
  item.addEventListener("hide.bs.collapse", (event) => {
    faqCollapseHead[i].style.backgroundColor = "#fff8f1";
    faqCollapseHead[i].style.color = "black";
    faqCross[i].classList.add("fa-plus");
    faqCross[i].classList.remove("fa-xmark");
  });
});

let burgerCross = document.querySelector(".burger-cross");
let burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", (event) => {
  event.preventDefault;
  burgerCross.style.display = "block";
  burgerMenu.style.display = "none";
});

burgerCross.addEventListener("click", (event) => {
  event.preventDefault;
  burgerCross.style.display = "none";
  burgerMenu.style.display = "block";
});
