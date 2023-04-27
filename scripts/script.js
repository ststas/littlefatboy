const headerMenuButtonElement = document.querySelector('.navigation__menu-button-container');
const headerMenuElement = document.querySelector('.navigation__menu');

const openHeaderMenu = function() {
  headerMenuElement.classList.toggle('navigation__menu_opened')
}

headerMenuButtonElement.addEventListener('click', openHeaderMenu)
