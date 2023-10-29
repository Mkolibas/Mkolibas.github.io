"use strict";

// Initialize global variables
let operands = [];
let operations = [];

// Initialize the calculator when the window loads
window.onload = initializeCalculator;

function initializeCalculator() {
    document.getElementById("calc-clear").onclick = clearDisplay;
    document.getElementById("calc-equals").onclick = performCalculation;
    document.getElementById("calc-decimal").onclick = addDecimal;
    attachNumberClickHandlers();
    attachOperatorClickHandlers();
}

function clearDisplay() {
    const display = document.getElementById("calc-display");
    display.innerHTML = "0";
    operands = [];
    operations = [];
}

function addDecimal() {
    const display = document.getElementById("calc-display");
    if (!display.innerHTML.includes(".")) {
        display.innerHTML += ".";
    }
}

function attachNumberClickHandlers() {
    const numbers = document.getElementsByClassName("calc-num");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].onclick = function (event) {
            const display = document.getElementById("calc-display");
            if (display.innerHTML === "0") {
                display.innerHTML = event.target.innerHTML;
            } else {
                display.innerHTML += event.target.innerHTML;
            }
        };
    }
}

function attachOperatorClickHandlers() {
    const operators = document.getElementsByClassName("calc-operator");
    for (let i = 0; i < operators.length; i++) {
        operators[i].onclick = function (event) {
            const operator = event.target.getAttribute("data-operator");
            operands.push(parseFloat(document.getElementById("calc-display").innerHTML));
            document.getElementById("calc-display").innerHTML = "0";
            operations.push(operator);
        };
    }
}

function performCalculation() {
    if (operands.length === 0 || operations.length === 0) {
        clearDisplay();
        return;
    }
    let runningTotal = operands[0];

    for (let i = 0; i < operands.length; i++) {
        let nextOperand;
        if (i + 1 === operands.length) {
            nextOperand = parseFloat(document.getElementById("calc-display").innerHTML);
        } else {
            nextOperand = parseFloat(operands[i + 1]);
        }
        if (operations[i] === "+") {
            runningTotal += nextOperand;
        } else if (operations[i] === "-") {
            runningTotal -= nextOperand;
        } else if (operations[i] === "x") {
            runningTotal *= nextOperand;
        } else if (operations[i] === "/") {
            if (nextOperand === 0) {
                alert("Divide By Zero Error");
                clearDisplay();
                return;
            }
            runningTotal /= nextOperand;
        }
    }
    document.getElementById("calc-display").innerHTML = runningTotal;
    operands = [];
    operations = [];
}