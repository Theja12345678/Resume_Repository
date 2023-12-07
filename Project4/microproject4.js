let displayValue = '0';
let operator = '';
let operand = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    operand = displayValue;
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    if (operator && operand) {
        switch (operator) {
            case '+':
                displayValue = (parseFloat(operand) + parseFloat(displayValue)).toString();
                break;
            case '-':
                displayValue = (parseFloat(operand) - parseFloat(displayValue)).toString();
                break;
            case '*':
                displayValue = (parseFloat(operand) * parseFloat(displayValue)).toString();
                break;
            case '/':
                if (parseFloat(displayValue) !== 0) {
                    displayValue = (parseFloat(operand) / parseFloat(displayValue)).toString();
                } else {
                    displayValue = 'Error';
                }
                break;
            default:
                break;
        }
        operator = '';
        operand = '';
        updateDisplay();
    }
}

function deleteDigit() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function reset() {
    displayValue = '0';
    operator = '';
    operand = '';
    updateDisplay();
}
