const inputEl = document.querySelector('.game-input');
const gameBtnEl = document.querySelector('.game-btn');
const resetBtn = document.querySelector('.reset-btn');
const resultText = document.querySelector('.result');
const chanceText = document.querySelector('.chance');
let chance = 5;
let numHistory = [];
let gameOver = false;


function randomNum () {
  pickRandomNum = Math.floor(Math.random() * 100) + 1;
  console.log('정답은?', pickRandomNum);
}

function play () {
  const userNum = parseInt(inputEl.value);
  
  if (numHistory.includes(userNum)) {
    resultText.textContent = '중복된 숫자입니다 다른 숫자를 입력해 주세요';
    return
  }
  
  chance --;
  chanceText.textContent = `${chance}번!`
  
  if (userNum == pickRandomNum) {
    resultText.textContent = '정답!';
    gameBtnEl.disabled = true;
  } else if (userNum < pickRandomNum) {
    resultText.textContent = 'Down!';
  } else {
    resultText.textContent = 'Up!';
  }

  numHistory.push(userNum);

  if (chance == 0) {
    gameBtnEl.disabled = true;
  }
}

function gameReset () {
  randomNum();
  resultText.textContent = '';
  chanceText.textContent = '';
  inputEl.value = '';
  gameBtnEl.disabled = false;
  gameOver = false;
  numHistory = [];
  chance = 5;
  chanceText.textContent = `${chance}번!`
}

randomNum();
gameBtnEl.addEventListener('click', play);
resetBtn.addEventListener('click', gameReset);
inputEl.addEventListener('focus', function () {
  inputEl.value = '';
})