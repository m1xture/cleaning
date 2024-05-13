const refs = {
  openBtnEl: document.querySelector('[data-job-button]'),
  backdropEl: document.querySelector('[data-cleaner-backdrop]'),
};

function toggleModal() {
  refs.backdropEl.classList.toggle('cleaner--hidden');
}

refs.openBtnEl.addEventListener('click', toggleModal);
refs.backdropEl.addEventListener('click', e => {
  if (
    e.target.classList.contains('cleaner') ||
    e.target.dataset.cleanerCloseBtn
  )
    toggleModal();
});
