const headerMenuButtonElement = document.querySelector('.header__menu-button-container');
const headerMenuElement = document.querySelector('.header__menu');

const openHeaderMenu = function() {
  headerMenuElement.classList.toggle('header__menu_opened')
}

headerMenuButtonElement.addEventListener('click', openHeaderMenu)
