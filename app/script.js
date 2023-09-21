let currentInput = "";
let currentOperator = "";
function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}
function appendOperator(operator) {
  if (currentOperator !== "") {
    calculate();
  }
  currentOperator = operator;
  currentInput += operator;
  updateDisplay();
}
function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  updateDisplay();
}
function calculate() {
  if (currentOperator === "") {
    return; // Nothing to calculate
  }
  const values = currentInput.split(currentOperator);
  const num1 = parseInt(values[0]);
  const num2 = parseInt(values[1]);
  let result;
  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Error";
  }
  currentInput =
    num1.toString() +
    currentOperator +
    num2.toString() +
    " = " +
    result.toString();
  currentOperator = "";
  updateDisplay();
}
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentInput;
}
