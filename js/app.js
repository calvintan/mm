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
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const slideIndicator = document.querySelector('.slide-indicator');

let current = 0;
let move = 0;
let moveAmount = 1100;

leftBtn.addEventListener('click', function() {
  current--;
  if (current < 0) {
    current = 0;
  } else {
    move += moveAmount;
    bg.style.transform = `translate(${move}px)`;
  }
});

rightBtn.addEventListener('click', function() {
  current++;
  if (current >= data.length) {
    current = data.length - 1;
  } else {
    move -= moveAmount;
    bg.style.transform = `translate(${move}px)`;
  }
});

data.forEach((item, index) => {
  slideIndicator.insertAdjacentHTML('beforeend', `<span class="indicator">${index}</span>`);
});

const indicators = document.querySelectorAll('.slide-indicator span');

indicators.forEach((item, index) => {
  item.addEventListener('click', function(){
    current = index;
    move = moveAmount * index * -1;
    bg.style.transform = `translate(${move}px)`;
  })
});
