const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange Banners Next to each other
const setSlidePostition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePostition);

nextButton.addEventListener('click', e => {
  const currentSlide = track.document.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  // Move to the next slide
  track.style.transform = `translateX(${amountToMove}')`;
});