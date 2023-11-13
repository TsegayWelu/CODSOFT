let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateRoot() {
    //  I am geting the value from the display
    var inputValue = document.getElementById('display').value;
  
    console.log('Input value:', inputValue); // Add this line for debugging
  
    // Check if the input value is a valid number
    if (isNaN(parseFloat(inputValue)) || parseFloat(inputValue) < 0) {
      display.value = 'Error';
      expression = '';
      return;
    }
  
    // Convert the input value to a number and calculate the square root
    var result = Math.sqrt(parseFloat(inputValue)); // Corrected the missing closing parenthesis
  
    console.log('Square root result:', result); // Add this line for debugging
  
    // Update the display with the result
    document.getElementById('display').value = result;
  }
  
  
  function calculateSquare() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    var result = Math.pow(parseFloat(currentValue), 2);
    display.value = result;
  }
  function mod() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    // Split the input by the operator
    var values = currentValue.split('%');
    // Ensure there are two values
    if (values.length === 2) {
      var dividend = parseFloat(values[0]);
      var divisor = parseFloat(values[1]);
      var result = dividend % divisor;
      display.value = result;
    } else {
      display.value = "Error: Invalid input";
    }
  }
  
  

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}


