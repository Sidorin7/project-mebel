const burger = () => {
  let menuBtn = document.getElementById("burger");
  let navigation = document.querySelector('.header__top')
  let overlay = document.querySelector('.overlay')
  let header = document.querySelector('.header__nav-link');
			let menuOpen = false;
			menuBtn.addEventListener("click", () => {
				if (!menuOpen) {
					navigation.classList.toggle("header__top--open");
          overlay.classList.toggle('overlay--show')
          


				}
			});
      document.querySelector(".burger, .overlay, .header__top a").addEventListener('click', function(e) {
        e.preventDefault();
        overlay.classList.toggle('overlay--show')
        navigation.classList.toggle("header__top--open");
        header.classList.toggle("header__top--open");
      })
    
};

export default burger;
