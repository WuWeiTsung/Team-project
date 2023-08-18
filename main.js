import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");
document.addEventListener(
  "click",

  function (event) {
    // 获取点击的元素
    const clickedElement = event.target;

    // 获取要关闭的折叠元素
    const collapseElement = document.querySelector(".collapse");
    const collapseOverlay = document.querySelector(".collapse-overlay");

    // 判断点击的元素是否为遮罩层
    if (clickedElement === collapseOverlay) {
      // 关闭折叠
      const collapse = new bootstrap.Collapse(collapseElement, {
        toggle: false,
      });
      collapse.hide();
    }
  }
);
