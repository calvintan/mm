const bg = document.querySelector('.bg img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const slideIndicator = document.querySelector('.slide-indicator');
const texts = document.querySelectorAll('.texts div');

let current = 0;
let move = 0;
let moveAmount = 1100;
let currentText = texts[current];

prevBtn.addEventListener('click', function() {
  currentText = texts[current];
  current--;
  if (current < 0) {
    current = 0;
  } else {
    move += moveAmount;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    bg.addEventListener('transitionend', () => {
      texts[current].classList.add('active');
    });
  }
});

nextBtn.addEventListener('click', function() {
  currentText = texts[current];
  current++;
  if (current >= data.length) {
    current = data.length - 1;
  } else {
    move -= moveAmount;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    bg.addEventListener('transitionend', () => {
      texts[current].classList.add('active');
    });
  }
});

texts.forEach(function(item, index) {
  slideIndicator.insertAdjacentHTML('beforeend', `<span class="indicator">${index}</span>`);
});

const indicators = document.querySelectorAll('.indicator');

indicators.forEach(function(item, index) {
  item.addEventListener('click', function() {
    currentText = texts[current];
    current = index;
    move = moveAmount * index * -1;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    bg.addEventListener('transitionend', () => {
      texts[current].classList.add('active');
    });
  });
});

