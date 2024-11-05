
let currentInput = '';
let operator = '';
let previousInput = '';
function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}
function setOperator(op) {
  if (currentInput === '') return; 
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (previousInput === '' || currentInput === '') return;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      if (currentInput === '0') {
        alert("Cannot divide by zero!");
        return;
      }
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  
  document.getElementById('display').value = result;
  currentInput = result.toString();
  operator = '';
  previousInput = '';
}
