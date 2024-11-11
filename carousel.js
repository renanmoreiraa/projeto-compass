/** Current index of the displayed slide */
let currentSlide = 0;
/** NodeList containing all hero image elements */
const slides = document.querySelectorAll(".hero-image");
/** Total number of slides in the carousel */
const totalSlides = slides.length;
/** Progress bar element that shows the current slide position */
const progressBar = document.querySelector(".progress-bar .progress");

/** Interval ID for automatic slide transitions, changes slide every 5 seconds */
let slideInterval = setInterval(goToNextSlide, 5000);

/**
 * Advances the carousel to the next slide
 * Updates both the carousel position and progress bar
 */
function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
  updateProgressBar();
}

/**
 * Moves the carousel to the previous slide
 * Updates both the carousel position and progress bar
 */
function goToPreviousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
  updateProgressBar();
}

/**
 * Updates the carousel's position by translating the hero-images container
 * The translation is calculated based on the current slide index and individual image width
 */
function updateCarousel() {
  const heroImages = document.querySelector(".hero-images");
  const imageWidth = slides[currentSlide].offsetWidth;
  heroImages.style.transform = `translateX(-${currentSlide * imageWidth}px)`;
}

/**
 * Updates the progress bar width based on the current slide position
 * Width is calculated as a percentage of total slides completed
 */
function updateProgressBar() {
  const progressWidth = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = `${progressWidth}%`;
}

/**
 * Resets the automatic slide interval
 * Clears the existing interval and starts a new 5-second interval
 */
function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(goToNextSlide, 5000);
}

// Event listener for the previous slide button
document.querySelector(".left-arrow").addEventListener("click", () => {
  goToPreviousSlide();
  resetSlideInterval();
});

// Event listener for the next slide button
document.querySelector(".right-arrow").addEventListener("click", () => {
  goToNextSlide();
  resetSlideInterval();
});

// Add window resize listener to update carousel position when window is resized
window.addEventListener("resize", updateCarousel);

updateProgressBar();
