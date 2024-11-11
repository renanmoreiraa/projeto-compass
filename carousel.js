let currentSlide = 0;
const slides = document.querySelectorAll(".hero-image");
const totalSlides = slides.length;
const progressBar = document.querySelector(".progress-bar .progress");

let slideInterval = setInterval(goToNextSlide, 5000);

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
  updateProgressBar();
}

function goToPreviousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
  updateProgressBar();
}

function updateCarousel() {
  const heroImages = document.querySelector(".hero-images");
  const imageWidth = slides[currentSlide].offsetWidth;
  heroImages.style.transform = `translateX(-${currentSlide * imageWidth}px)`;
}

function updateProgressBar() {
  const progressWidth = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = `${progressWidth}%`;
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(goToNextSlide, 5000);
}

document.querySelector(".left-arrow").addEventListener("click", () => {
  goToPreviousSlide();
  resetSlideInterval();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  goToNextSlide();
  resetSlideInterval();
});

window.addEventListener("resize", updateCarousel);

updateProgressBar();
