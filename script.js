let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '.') return;
    if (['+', '-', '*', '/', '%'].includes(currentInput.slice(-1)) && operator !== '.') return;
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (Number.isInteger(result)) {
            result = result.toString();
        } else {
            result = result.toFixed(2);
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Erro';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}
