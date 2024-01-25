const resultDisplay = 0;
const container = document.getElementById("container");
const calculator = document.getElementById("calculator");
const result = document.getElementById("result");
const userNumber = document.getElementsByClassName("userNumber");
const calcResult = document.getElementsByClassName("calcResult");
const allButtons = document.querySelectorAll(".button");
let userValue = undefined;

console.log(userNumber);
console.log(calcResult);

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.innerText);
  });
});

function handleButtonClick(value) {
  userValue = updateResult(value);
  multiplicateResult();
}

function updateResult(value) {
  result.value += value;
  return result.value;
}

function resultDis(value) {
  result.value = value;
}

function clearResult() {
  result.value = "";
  result = 0;
}

function multiplicateResult(value) {
  for (let i = 0; i < 10; i++) {
    userNumber[i].innerHTML = userValue;
    calcResult[i].innerHTML = userValue * i;
  }
}

