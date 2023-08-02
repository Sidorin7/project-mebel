/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/PlayVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/PlayVideo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
        } else {
          const path = btn.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }
  bindCloseBtn() {
    if (this.close) {
      this.close.addEventListener('click', () => {
        this.overlay.style.display = 'none';
        this.player.stopVideo();
      });
    }
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });
    console.log(this.player);
    this.overlay.style.display = 'flex';
  }
  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindCloseBtn();
  }
}

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = () => {
  let menuBtn = document.getElementById("burger");
  let navigation = document.querySelector('.header__top');
  let overlay = document.querySelector('.overlay');
  let header = document.querySelector('.header__nav-link');
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      navigation.classList.toggle("header__top--open");
      overlay.classList.toggle('overlay--show');
    }
  });
  document.querySelector(".burger, .overlay, .header__top a").addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.toggle('overlay--show');
    navigation.classList.toggle("header__top--open");
    header.classList.toggle("header__top--open");
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const btns = document.querySelectorAll(".categories__filter-btn");
  const storeProducts = document.querySelectorAll(".categories__list-item");
  // const search = document.getElementById(search);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", e => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      storeProducts.forEach(product => {
        if (filter === "table") {
          product.style.display = "block";
          product.classList.add('animated', 'fadeIn');
        } else {
          if (product.classList.contains(filter)) {
            product.style.display = "block";
            product.classList.add('animated', 'fadeIn');
          } else {
            product.style.display = "none";
            product.classList.remove('animated', 'fadeIn');
          }
        }
      });
    });
  }

  // SEARCH FILTER
  const search = document.getElementById("search");
  const productName = document.querySelectorAll(".categories__link-title");

  // A BETTER WAY TO FILTER THROUGH THE PRODUCTS
  search.addEventListener("keyup", filterProducts);
  function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function (product) {
      const item = product.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        product.parentElement.parentElement.style.display = "grid";
        product.classList.add('animated', 'fadeIn');
      } else {
        product.parentElement.parentElement.style.display = "none";
        product.classList.remove('animated', 'fadeIn');
      }
    });
  }
  const menu = document.querySelector(".categories__filter-box"),
    items = menu.querySelectorAll(".categories__filter-btn");
  menu.addEventListener("click", e => {
    let target = e.target;
    if (target && target.tagName === "BUTTON") {
      items.forEach(btn => btn.classList.remove("categories__filter-btn--active"));
      target.classList.add("categories__filter-btn--active");
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;

        // if (destroy) {
        //   item.remove();
        // }

        windows.forEach(item => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn");
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener("click", () => {
      windows.forEach(item => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      document.querySelectorAll("[data-modl]").forEach(item => {
        if (getComputedStyle(item).display !== "none") {
          // если модальное окно показано пользоваетелю
          display = "block";
        }
      });
      if (!display) {
        // если в данный момент не одно модальное окно не показывает, то
        document.querySelector(selector).style.display = "block"; // показываем то, модальное окно, которое нам нужно
        document.body.style.overflow = "hidden"; // заморозка скролла
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // для древних браузеров

      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal(".header__nav-btn", ".popup-catalog", ".popup-catalog .popup-close");
  const btnCatalog = document.querySelector('.header__nav-item--catalog');
  btnCatalog.addEventListener('click', function () {
    btnCatalog.backgroundColor = 'white';
    btnCatalog.color = 'black';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = () => {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_PlayVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/PlayVideo */ "./src/js/modules/PlayVideo.js");





'use strict';
(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_filter__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_burger__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
const player = new _modules_PlayVideo__WEBPACK_IMPORTED_MODULE_4__["default"]('.youtube .play', '.overlay-youtube');
player.init();
})();

/******/ })()
;
//# sourceMappingURL=script.js.map