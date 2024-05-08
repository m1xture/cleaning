document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButtons = document.querySelectorAll('.tips-see-more__span');
    const closeButtons = document.querySelectorAll('.close-button');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalText = this.parentElement.parentElement.querySelector('.show-text');
            additionalText.classList.add('hidden');

        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalText = this.parentElement;
            additionalText.classList.remove('hidden');

        });
    });
});