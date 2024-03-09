//https://opentdb.com/api.php?amount=30&type=multiple

const _question = document.getElementById("question");
const _options = document.querySelector(".quiz_options");
const _correctScore = document.getElementById("correct_score");
const _totalQuestion = document.getElementById("total_questions");
const _checkAnsBtn = document.getElementById("check_answer");
const _playAgainBtn = document.getElementById("play_again");
const _result = document.getElementById("result");

let correctAns = "",
  correctScore = (askedCount = 0),
  totalQuestions = 10;

//Add event Listener
function eventListener() {
  _checkAnsBtn.addEventListener("click", checkAnswer);
  _playAgainBtn.addEventListener("click", restartQuiz);
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
  eventListener();
  _totalQuestion.textContent = totalQuestions;
  _correctScore.textContent = correctScore;
});

async function loadQuestion() {
  const apiUrl = "https://opentdb.com/api.php?amount=1&type=multiple";
  const result = await fetch(`${apiUrl}`);
  const data = await result.json();
  _result.innerHTML = "";
  showQuestion(data.results[0]);
}
// Display question and options
function showQuestion(data) {
  _checkAnsBtn.disabled = false;
  correctAns = data.correct_answer;
  let incorrectAns = data.incorrect_answers;
  let optionList = incorrectAns;
  //Inserting correct ans at any random position in option list
  optionList.splice(
    Math.floor(Math.random() * (incorrectAns.length + 1)),
    0,
    correctAns
  );

  _question.innerHTML = `${data.question} <br> <span class = "category">${data.category}</span>`;
  _options.innerHTML = `${optionList
    .map((option, index) => `<li> ${index + 1}. <span> ${option} </span></li>`)
    .join("")}`;
  selectOption();
}

//Options selection
function selectOption() {
  _options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      if (_options.querySelector(".selected")) {
        const activeOption = _options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
  console.log(correctAns);
}

//Checking Answer
function checkAnswer() {
  _checkAnsBtn.disabled = true;
  if (_options.querySelector(".selected")) {
    let selectedAnswer = _options.querySelector(".selected span").textContent;
    if (selectedAnswer.trim() == HTMLDecode(correctAns)) {
      correctScore++;
      _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
    } else {
      _result.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p><p><small><b>Correct Answer : </b>${correctAns}</small></p>`;
    }
    checkCount();
  } else {
    _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
    _checkAnsBtn.disabled = false;
  }
}

// to convert any html entities to normal text of correct answer
function HTMLDecode(textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}

function checkCount() {
  askedCount++;
  setCount();
  if (askedCount == totalQuestions) {
    _result.innerHTML += `<p>Your score is ${correctScore}</p>`;
    _playAgainBtn.style.display = "block";
    _checkAnsBtn.style.display = "none";
  } else {
    setTimeout(() => {
      loadQuestion();
    }, 700);
  }
}

function setCount() {
  _totalQuestion.textContent = totalQuestions;
  _correctScore.textContent = correctScore;
}

function restartQuiz() {
  correctScore = askedCount = 0;
  _playAgainBtn.style.display = "none";
  _checkAnsBtn.style.display = "block";
  _checkAnsBtn.disabled = false;
  loadQuestion();
  setCount();
}
