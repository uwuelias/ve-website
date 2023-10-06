const slider = document.querySelector('.slider');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let slideIndex = 0;

function slideTo(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
        slideTo(slideIndex);
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        slideTo(slideIndex);
    }
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);