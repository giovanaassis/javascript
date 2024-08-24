"use script";

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.getElementById('equal-btn');
const deleteBtn = document.getElementById('delete-btn');
const clearBtn = document.getElementById('clear-btn');
const previousOperationTxt = document.querySelector('#previous-operation');
const currentOperationTxt = document.querySelector('#current-operation');


class Calculator {
    constructor(previousOperationTxt, currentOperationTxt) {
        this.previousOperationTxt = previousOperationTxt;
        this.currentOperationTxt = currentOperationTxt;
        this.clear();
    }

    formatDigit(number) {
        const strNumber = number.toString();
        const integerDigits = parseFloat(strNumber.split('.')[0]);
        const decimalDigits = strNumber.split('.')[1];
        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0,});
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    calculate() {
        let result;
        const _previousOperation  = parseFloat(this.previousOperation);
        const _currentOperation = parseFloat(this.currentOperation);

        if (isNaN(_previousOperation) || isNaN(_currentOperation)) return;

        switch (this.operation) {
            case '+':
                result = _previousOperation + _currentOperation;
                break;
            case '-':
                result = _previousOperation - _currentOperation;
                break;
            case '*':
                result = _previousOperation * _currentOperation;
                break;
            case '/':
                result = _previousOperation / _currentOperation;
                break;
            default:
                return;
        }

        this.currentOperation = result;
        this.operation = undefined;
        this.previousOperation = '';
    }

    appendNumber(number) {
        if (this.currentOperation.includes('.') && number === '.') return;

        this.currentOperation = `${this.currentOperation}${number.toString()}`;
    }

    chooseOperation(operator) {
        if (this.currentOperation === '') return;

        if (this.previousOperation !== '') {
            this.calculate();
        }
        this.operation = operator;
        this.previousOperation = this.currentOperation;
        this.currentOperation = '';
    }

    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0,-1);
    }

    clear() {
        this.previousOperation = '';
        this.currentOperation = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousOperationTxt.innerText = `${this.formatDigit(this.previousOperation)} ${this.operation || ''}`
        this.currentOperationTxt.innerText = this.formatDigit(this.currentOperation);
    }
}

const calc = new Calculator(previousOperationTxt, currentOperationTxt);

numberBtn.forEach((event) => {
    event.addEventListener('click', () => {
        calc.appendNumber(event.innerHTML);
        calc.updateDisplay();
    })
})

operatorBtn.forEach((event) => {
    event.addEventListener('click', () => {
        calc.chooseOperation(event.innerHTML);
        calc.updateDisplay();
    })
})

equalBtn.addEventListener('click', () => {
    calc.calculate();
    calc.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calc.delete();
    calc.updateDisplay();
})

clearBtn.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
});

