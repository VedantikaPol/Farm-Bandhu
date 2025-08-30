document.addEventListener('DOMContentLoaded', () => {
    
    // --- Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    startSlideShow();
});
