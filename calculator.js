
let currentInput = '';
let resultDisplayed = false;
const resultPlace =document.getElementById('result');

function clr() {
    currentInput = '';
    resultPlace.innerText = '0000';
}

function callStr() {
    const value = event.target.value;

    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }

    currentInput += value;
    resultPlace.innerText = currentInput || '0000';
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput+=`=${result}`;
        // currentInput = result.toString();
        resultPlace.innerText = currentInput;

        
        currentInput = '';

    } catch (error) {

        resultPlace.innerText = 'Error';
        currentInput = '';

    }
}
