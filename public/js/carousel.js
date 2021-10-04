// Controls Hero Banner Navigation on Homepage
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange Banners Next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// Move to target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  if (!targetSlide) return;
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Update Nav Dot info
const updateDots = (currentDot, targetDot) => {
  if (!targetDot) return;
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

// When I click the Left Button, slides move left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

// When I click the Right Button, slides move right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;

  // Move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

// When I click on the nav indicators, navigate to that slide
dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  // Move to the next slide by nav button selected
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);  
});
