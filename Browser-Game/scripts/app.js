const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
let time = 0;
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
let score = 0;
const colors = [
  "#ec28c2",
  "#13ffc4",
  "#f2e314",
  "#fb1414",
  "#1625ff",
  "black",
  "#fff",
];

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  } 
});

function startGame() {
  setTime(time)
  setInterval(decreaseTime, 1000)
  createRandomCircle()
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
    let min = getMin()
    if (time >= 60) {
        timeEl.innerHTML = `0${min}:0${time - 60}` // 01:010 || 01:9 ??? Need to fix
    } else 
  timeEl.innerHTML = `00:${value}`
}

function getMin() {
    let fullTime = time
    if (fullTime >= 60) {
        let ost = fullTime - 60
    return (fullTime - ost) / 60
    }
}

function finishGame() {
  timeEl.parentNode.classList.add("hide")
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const color = getRandomNumber(0, 4);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `${colors[color]}`;
  circle.style.boxShadow = `0 0 2px ${colors[color]}, 0 0 10px ${colors[color]}`;
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
