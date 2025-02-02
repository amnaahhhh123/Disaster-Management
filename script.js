let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.opacity = 0);
    slides[index].style.opacity = 1;
    index = (index + 1) % slides.length;
}

setInterval(showSlides, 5000);
showSlides();
