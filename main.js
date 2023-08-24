import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

// Banner 輪播
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  //自動播放
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  //分頁點點
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

