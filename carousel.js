let currentSlide = 0;
const slides = document.querySelectorAll(".hero-image");
const totalSlides = slides.length;
const progressBar = document.querySelector(".progress-bar .progress");

let slideInterval = setInterval(goToNextSlide, 5000); // Intervalo automático para troca de slide

// Função para ir ao próximo slide
function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    updateProgressBar();
}

// Função para ir ao slide anterior
function goToPreviousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    updateProgressBar();
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const heroImages = document.querySelector(".hero-images");
    heroImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
    const progressWidth = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressWidth}%`;
}

// Função para resetar o intervalo automático
function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(goToNextSlide, 5000); // Reinicia o intervalo automático
}

// Adiciona os eventos de clique nas setas
document.querySelector(".left-arrow").addEventListener("click", () => {
    resetSlideInterval();
    goToPreviousSlide(); // Vai para o slide anterior
});

document.querySelector(".right-arrow").addEventListener("click", () => {
    resetSlideInterval();
    goToNextSlide(); // Vai para o próximo slide
});
