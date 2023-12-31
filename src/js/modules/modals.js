const modals = () => {

  let btnPressed = false;
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        // if (destroy) {
        //   item.remove();
        // }

        windows.forEach((item) => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn");
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
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

      document.querySelectorAll("[data-modl]").forEach((item) => {
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
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ); // для древних браузеров

      if (
        !btnPressed &&
        window.scrollY + document.documentElement.clientHeight >= scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(
    ".header__nav-btn",
    ".popup-catalog",
    ".popup-catalog .popup-close"
  );

  const btnCatalog = document.querySelector('.header__nav-item--catalog');

  btnCatalog.addEventListener('click', function() {
    btnCatalog.backgroundColor = 'white'
    btnCatalog.color = 'black'
  })


};

export default modals;
