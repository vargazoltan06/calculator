'use strict';

const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.calculator__display');
const clearButton = document.querySelector('.clearButton');
const decimal = document.querySelector('.decimal');
const operatorButton = document.querySelectorAll('.operator__button');
const equal = document.querySelector('.equal__button');
let number = [];
let operator = [];

const displayFilling = () => {
    numberButtons.forEach(numberButtons => numberButtons.addEventListener('click', () => {
        display.value += numberButtons.value
        number.push(numberButtons.value)
    }));
    operatorButton.forEach(operatorButton => operatorButton.addEventListener('click', () => {
        display.value += operatorButton.value;
        operator.push(operatorButton.value)
    }));
    decimal.addEventListener('click', () => {
        if (!display.value.includes(decimal.value)) {
            display.value += decimal.value
        }
    })
};

const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === "+") {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === "-") {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === "x") {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === "/") {
        result = parseFloat(n1) / parseFloat(n2)
    }
    console.log(result); 
}

const equalButtonHandler = () => equal.addEventListener('click', calculate);

const displayCleaning = () => {
    clearButton.addEventListener('click', () => display.value = '');
};


displayFilling();
displayCleaning();
