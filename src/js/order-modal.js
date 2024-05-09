const openModalBtnRef = document.querySelector('.portfolio__button');
const closeModalBtnRef = document.querySelector('.order-modal-close__btn');
const bacdropRef = document.querySelector('.backdrop-order');

openModalBtnRef.addEventListener('click', () =>
  bacdropRef.classList.toggle('is-hidden-order')
);
closeModalBtnRef.addEventListener('click', () =>
  bacdropRef.classList.toggle('is-hidden-order')
);
