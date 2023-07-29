/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const btns = document.querySelectorAll(".categories__filter-btn");
const storeProducts = document.querySelectorAll(".categories__list-item");
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    storeProducts.forEach(product => {
      if (filter === "all") {
        product.style.display = "block";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".categories__link-content h3");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);
function filterProducts(e) {
  const text = e.target.value.toLowerCase();
  // console.log(productName[0]);
  productName.forEach(function (product) {
    const item = product.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = "block";
    } else {
      product.parentElement.parentElement.style.display = "none";
    }
  });
}

// ------------------Slider------------------

new Swiper(".testimonials__slider-wrapper", {
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev"
  },
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});
/******/ })()
;
//# sourceMappingURL=script.js.map