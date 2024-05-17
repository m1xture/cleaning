const openModalBtnRef = document.querySelector('.portfolio__button');
// const closeModalBtnRef = document.querySelector('.order-modal-close__btn');
const backdropRef = document.querySelector('.backdrop-order');

openModalBtnRef.addEventListener('click', () =>
  backdropRef.classList.toggle('is-hidden-order')
);
backdropRef.addEventListener('click', e => {
  if (
    e.target === e.currentTarget ||
    e.target.dataset.orderClose
  ) {
    backdropRef.classList.toggle('is-hidden-order');
  }
});
