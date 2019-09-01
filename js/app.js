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
  }
]

const bg = document.querySelector('.bg-layer img');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const slideIndicator = document.querySelector('.slide-indicator');

let move = 0;
let moveAmount = 1100;

leftBtn.addEventListener('click', function() {
  console.log('left');
  move += moveAmount;
  bg.style.transform = `translate(${move}px)`;
});

rightBtn.addEventListener('click', function() {
  console.log('right');
  move -= moveAmount;
  bg.style.transform = `translate(${move}px)`;
});

data.forEach((item, index) => {
  slideIndicator.insertAdjacentHTML('beforeend', `<span class="indicator">${index}</span>`);
});

const indicators = document.querySelectorAll('.slide-indicator span');

indicators.forEach((item, index) => {
  item.addEventListener('click', function(){
    move = moveAmount * index * -1;
    bg.style.transform = `translate(${move}px)`;
  })
});
