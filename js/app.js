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
const slideIndex = document.querySelector('.slide-index');

let move = 0;
let moveValue = 1100;

leftBtn.addEventListener('click', function() {
  console.log('left');
  move += moveValue;
  bg.style.transform = `translate(${move}px)`;
});

rightBtn.addEventListener('click', function() {
  console.log('right');
  move -= moveValue;
  bg.style.transform = `translate(${move}px)`;
});

data.forEach((item, index) => {
  slideIndex.insertAdjacentHTML('beforeend', `<span>${index}</span>`);
});

const span = document.querySelectorAll('.slide-index span');

span.forEach((item, index) => {
  item.addEventListener('click', function(){
    move = moveValue * index * -1;
    bg.style.transform = `translate(${move}px)`;
  })
});
