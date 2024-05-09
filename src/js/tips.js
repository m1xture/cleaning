document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButtons = document.querySelectorAll('.tips-see-more__span');
    const closeButtons = document.querySelectorAll('.close-button-tips');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalText = this.parentElement.parentElement.querySelector('.show-text');
            additionalText.classList.add('hidden-tips');

        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalText = this.parentElement;
            additionalText.classList.remove('hidden-tips');

        });
    });
});