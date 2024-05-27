let currentNumber = ''; // Stocke le nombre actuel entré par l'utilisateur
let operator = '';//  stocker l'opérateur choisi (+, -, *, /).
let previousNumber = '';//Variable pour stocker le nombre précédent avant l'opération.

function appendNumber(number) {// Cette fonction sera appelée lorsque l'utilisateur cliquera sur un bouton numérique de la calculatrice.
    currentNumber += number;
    updateDisplay();//En appelant updateDisplay pour met à jour l'affichage 
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result;
    operator = '';
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    operator = '';
    previousNumber = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}
