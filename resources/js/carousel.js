let currentIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex += n;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    const width = slides[0].clientWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${-currentIndex * width}px)`;
}