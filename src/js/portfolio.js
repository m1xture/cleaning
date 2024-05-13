document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".portfolio__img");
    const designListItems = document.querySelectorAll(".portfolio__design-list li");
    const totalImages = images.length;
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add("active");
                designListItems[i].querySelector(".portfolio__design").classList.add("active");
            } else {
                image.classList.remove("active");
                designListItems[i].querySelector(".portfolio__design").classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
        images[currentIndex].classList.add("next");
        images[(currentIndex - 1 + totalImages) % totalImages].classList.remove("active");
        setTimeout(() => {
            images[currentIndex].classList.remove("next");
            images[currentIndex].classList.add("active");
        }, 0.5);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
        images[currentIndex].classList.add("prev");
        images[(currentIndex + 1) % totalImages].classList.remove("active");
        setTimeout(() => {
            images[currentIndex].classList.remove("prev");
            images[currentIndex].classList.add("active");
        }, 0.5);
    }

    document.querySelector(".portfolio__arrow--left").addEventListener("click", prevImage);
    document.querySelector(".portfolio__arrow--right").addEventListener("click", nextImage);

    showImage(currentIndex); // Show the first image initially
});