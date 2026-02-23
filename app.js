const btns = document.querySelectorAll(".input-button");
let inputArea = document.querySelector(".input-area");

let justCalculated = false; 

const resetCalculator = () => {
  inputArea.innerText = "0";
  justCalculated = false;
};

let playGame = (button) => {
  let enteredInput = button.getAttribute("id");
  let operators = ["+","-","/","*"];

  if (enteredInput === "AC") {
    resetCalculator();
    return;
  }

  if (enteredInput === "=") {
    if (!operators.includes(inputArea.innerText.at(-1))) {
      inputArea.innerText = eval(inputArea.innerText);
      justCalculated = true; 
    }
    return;
  }

  if (justCalculated) {
    if (!operators.includes(enteredInput)) {
      inputArea.innerText = enteredInput; 
    } else {
      inputArea.innerText += enteredInput; 
    }
    justCalculated = false;
    return;
  }

  if (
    operators.includes(enteredInput) &&
    operators.includes(inputArea.innerText.at(-1))
  ) {
    return;
  }

  if (inputArea.innerText === "0") {
    if (!operators.includes(enteredInput)) {
      inputArea.innerText = enteredInput;
    }
  } else {
    inputArea.innerText += enteredInput;
  }
};

btns.forEach(button => {
  button.addEventListener("click", () => {
    playGame(button);
  });
});