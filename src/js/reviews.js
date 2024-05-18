document.querySelectorAll('.reviews__star-list').forEach((list) => {
    list.addEventListener('mouseover', (event) => {
        if (event.target.closest('li')) {
            const star = event.target.closest('li');
            const index = Array.from(list.children).indexOf(star);
            for (let i = 0; i <= index; i++) {
                list.children[i].querySelector('svg path').style.fill = 'yellow';
            }
        }
    });

    list.addEventListener('mouseout', (event) => {
        if (event.target.closest('li')) {
            const star = event.target.closest('li');
            const index = Array.from(list.children).indexOf(star);
            for (let i = 0; i <= index; i++) {
                list.children[i].querySelector('svg path').style.fill = '#D9D9D9';
            }
        }
    });
});