const filter = () => {
  const btns = document.querySelectorAll(".categories__filter-btn");
  const storeProducts = document.querySelectorAll(".categories__list-item");
  // const search = document.getElementById(search);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      e.preventDefault();

      const filter = e.target.dataset.filter;

      storeProducts.forEach((product) => {
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

    menu.addEventListener("click", (e) => {
        let target = e.target;
    
        if (target && target.tagName === "BUTTON") {
          items.forEach((btn) =>
            btn.classList.remove("categories__filter-btn--active")
          );
          target.classList.add("categories__filter-btn--active");
        }
      });

};

export default filter;
