const bg = document.querySelector('.bg img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const slideIndicator = document.querySelector('.slide-indicator');
const texts = document.querySelectorAll('.texts div');

let current = 0;
let move = 0;
let moveAmount = 1100;
let currentText = texts[current];

texts.forEach(function(item, index) {
  slideIndicator.insertAdjacentHTML('beforeend', `<span class="indicator">${index}</span>`);
});

const indicators = document.querySelectorAll('.indicator');

indicators[0].classList.add('active');
let currentIndicator = indicators[current];

indicators.forEach(function(item, index) {
  item.addEventListener('click', function() {
    currentText = texts[current];
    currentIndicator = indicators[current];
    current = index;
    move = moveAmount * index * -1;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    currentIndicator.classList.remove('active');
    texts[current].classList.add('active');
    indicators[current].classList.add('active');
  });
});

prevBtn.addEventListener('click', function() {
  currentText = texts[current];
  currentIndicator = indicators[current];
  current--;
  if (current < 0) {
    current = 0;
  } else {
    move += moveAmount;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    currentIndicator.classList.remove('active');
    indicators[current].classList.add('active');
    bg.addEventListener('transitionend', () => {
      texts[current].classList.add('active');
    });
  }
});

nextBtn.addEventListener('click', function() {
  currentText = texts[current];
  currentIndicator = indicators[current];
  current++;
  if (current >= texts.length) {
    current = texts.length - 1;
  } else {
    move -= moveAmount;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    currentIndicator.classList.remove('active');
    indicators[current].classList.add('active');
    bg.addEventListener('transitionend', () => {
      texts[current].classList.add('active');
    });
  }
});
