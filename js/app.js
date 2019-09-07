const data = [
  {
    title: "one",
    content: "first content"
  },
  {
    title: "two",
    content: "second content"
  },
  {
    title: "three",
    content: "third content"
  },
  {
    title: "four",
    content: "fourth content"
  },
  {
    title: "5",
    content: "5 content"
  },
  {
    title: "6",
    content: "6 content"
  },
  {
    title: "7",
    content: "7 content"
  },
  {
    title: "8",
    content: "8 content"
  },
  {
    title: "9",
    content: "9 content"
  },
  {
    title: "",
    content: ""
  }
]

const bg = document.querySelector('.bg-layer img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const slideIndicator = document.querySelector('.slide-indicator');
const textLayer = document.querySelector('.text-layer');
const texts = document.querySelectorAll('.text-layer div');

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

data.forEach((item, index) => {
  slideIndicator.insertAdjacentHTML('beforeend', `<span class="indicator">${index}</span>`);
});

const indicators = document.querySelectorAll('.slide-indicator span');

indicators.forEach((item, index) => {
  item.addEventListener('click', function(){
    currentText = texts[current];
    current = index;
    move = moveAmount * index * -1;
    bg.style.transform = `translate(${move}px)`;
    currentText.classList.remove('active');
    bg.addEventListener('transitionend', () => {
      texts[current].classList.add('active');
    });
  })
});

