document.querySelector('.tips__list').addEventListener('click', e => {
  if (e.target.dataset.tipsOpen) {
    e.target
      .closest('.tips__item')
      .querySelector('.show-text')
      .classList.add('tips--shown');
  }
  if (e.target.dataset.tipsClose) {
    e.target.parentElement.classList.remove('tips--shown');
  }
});