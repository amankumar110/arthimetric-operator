const numInputOne = document.getElementById("num1-input");
const operatorInput = document.getElementById("operator-input");
const numInputTwo = document.getElementById("num2-input");
const submitBtn = document.getElementById("btn");
const result = document.getElementById("result");

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let num1 = parseFloat(numInputOne.value);
  let operator = operatorInput.value;
  let num2 = parseFloat(numInputTwo.value);
  let ans = 0;
  if (operator == "+") {
    ans = add(num1, num2);
  } else if (operator == "-") {
    ans = sub(num1, num2);
  } else if (operator == "*") {
    ans = multiply(num1, num2);
  } else if (operator == "/") {
    ans = divide(num1, num2);
  }
  else {
    ans = "Enter valid operator only"
  }
  result.textContent = ans;
});
