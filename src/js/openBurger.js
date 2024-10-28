const toggleBurger = () => {
  document
    .querySelector('.header__burger-btn')
    .classList.toggle('header__burger-btn--active');
  document.querySelector('.burger').classList.toggle('burger--hidden');
};

document
  .querySelector('[data-burger-open]')
  .addEventListener('click', toggleBurger);
