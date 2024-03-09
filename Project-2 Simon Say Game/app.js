let userSeq = [];
let gameSeq = [];
let colors = ["red", "purple", "yellow", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let ranIdx = Math.floor(Math.random() * 4);
  let ranCol = colors[ranIdx];
  let ranBtn = document.querySelector(`.${ranCol}`);
  //   console.log(ranIdx);
  //   console.log(ranCol);
  //   console.log(ranBtn);
  gameSeq.push(ranCol);
  console.log(gameSeq);
  btnFlash(ranBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b>.<br/> Press any key to restart the game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 300);
    reset();
  }
}

function btnPress() {
  console.log(this);
  let pressedBtn = this;
  btnFlash(pressedBtn);

  userCol = pressedBtn.getAttribute("id");
  userSeq.push(userCol);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  userSeq = [];
  gameSeq = [];
  level = 0;
  started = false;
}
