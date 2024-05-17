const stars = document.querySelectorAll('.reviews__star');
const stars2 = document.querySelectorAll('.reviews__star-2');
const stars3 = document.querySelectorAll('.reviews__star-3');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        for (let i = 0; i <= index; i++) {
            stars[i].querySelector('svg path').style.fill = 'yellow';

        }
    });

    star.addEventListener('mouseout', () => {
        for (let i = 0; i <= index; i++) {
            stars[i].querySelector('svg path').style.fill = '#D9D9D9';
        }
    });
});

stars2.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        for (let i = 0; i <= index; i++) {
            stars2[i].querySelector('svg path').style.fill = 'yellow';

        }
    });

    star.addEventListener('mouseout', () => {
        for (let i = 0; i <= index; i++) {
            stars2[i].querySelector('svg path').style.fill = '#D9D9D9';
        }
    });
});

stars3.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        for (let i = 0; i <= index; i++) {
            stars3[i].querySelector('svg path').style.fill = 'yellow';

        }
    });

    star.addEventListener('mouseout', () => {
        for (let i = 0; i <= index; i++) {
            stars3[i].querySelector('svg path').style.fill = '#D9D9D9';
        }
    });
});