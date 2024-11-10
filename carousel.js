let currentSlide = 0;
const slides = document.querySelectorAll(".hero-image");
const totalSlides = slides.length;

// Função para ir ao próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Função para ir ao slide anterior
function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const heroImages = document.querySelector(".hero-images");
    heroImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Intervalo para o avanço automático do carrossel
setInterval(nextSlide, 3000);