const bg = document.querySelector('.bg img');
const loader = document.querySelector('.loader');
const loaderBox = document.querySelector('.loader-box');
const loadFirst = document.querySelector('.loader-box .load-first');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const slideIndicator = document.querySelector('.slide-indicator');
const texts = document.querySelectorAll('.texts div');
const lastText = document.querySelector('.texts div:last-child');

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
    animate();
    hideButton();
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
    bg.addEventListener('transitionend', function() {
      texts[current].classList.add('active');
    });
  }
  animate();
  hideButton();
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
    bg.addEventListener('transitionend', function() {
      texts[current].classList.add('active');
    });
  }
  animate();
  hideButton();
});

function animate() {
  if (current === texts.length - 1) {
    lastText.classList.add('animate');
  } else {
    lastText.classList.remove('animate');
  }
}

function hideButton() {
  if (current === 0) {
    prevBtn.classList.add('hide-button');
  } else {
    prevBtn.classList.remove('hide-button');
  }

  if (current === texts.length - 1) {
    nextBtn.classList.add('hide-button');
  } else {
    nextBtn.classList.remove('hide-button');
  }
}

function fade(element) {
  let op = 1;
  let timer = setInterval(function() {
    if (op <= 0.1){
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

window.onload = function() {
  setTimeout(function(){
    fade(loader)
  }, 3000 );
  const loadSecond = '<p class="load-second">young padawan...</p>';
  loaderBox.classList.add('grow');
  loadFirst.addEventListener('transitionend', function() {
    loadFirst.textContent = "Patience, ";
    loaderBox.insertAdjacentHTML('beforeend', loadSecond);
  });
}
