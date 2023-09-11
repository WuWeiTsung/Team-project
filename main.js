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

// 點擊愛心
const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});
//客製設計輪播
var swiper = new Swiper(".cusSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//換寶石
$(document).ready(function () {
  // 获取所有按钮和图标元素
  var $toggleButtons = $(".toggle-button");
  var $icons = $(".icon");

  // 创建状态变量来跟踪每个按钮的当前状态
  var buttonStates = {};

  // 添加点击事件处理程序
  $toggleButtons.click(function () {
    // 获取点击按钮的目标图标 ID
    var targetIconId = $(this).data("target");

    // 获取当前按钮的状态
    var currentState = buttonStates[targetIconId] || "hidden";

    if (currentState === "hidden") {
      // 隐藏所有图标
      $icons.hide();
      // 显示目标图标
      $("#" + targetIconId).show();
      // 更新按钮状态为显示
      buttonStates[targetIconId] = "shown";
    } else {
      // 隐藏目标图标
      $("#" + targetIconId).hide();
      // 更新按钮状态为隐藏
      buttonStates[targetIconId] = "hidden";
    }
  });
});
