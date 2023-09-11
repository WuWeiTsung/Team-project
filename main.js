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

// 回到最上頁按鈕(柯基新增 9/10)
// 用goTop當成變數，而這個變數是抓到scroll-top-btn這個class
const goTop = document.querySelector(".scroll-top-btn");

//對螢幕使用監聽器(可以想像成監視器)，監視的條件是scroll(滑動)與否
window.addEventListener("scroll", () => {
  // 假設當垂直滑動超過300px時，會對goTop，也就是scroll-top-btn加上active這個class
  if (window.scrollY > 300) {
    goTop.classList.add("active");
    // console.log("123"); //這句只是看有沒有進入判斷式
  } else {
    // 如果沒有超過300px，就移除active這個class
    goTop.classList.remove("active");
  }
});
