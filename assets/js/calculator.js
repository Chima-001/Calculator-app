let displayEl = document.getElementById('display');
displayEl.value = '0';
let calculationCompleted = false;
let currentInput = '';
let operator = null;
let previousInput = 0;

//study this code below//
function key(value) {
    if (calculationCompleted) {
        displayEl.value = '';
        calculationCompleted = false;
    }
    
    let current = displayEl.value;
    
    // Handle leading zero replacement for numbers
    if (current === '0' && !isNaN(value) && value !== '.') {
        displayEl.value = value;
        return;
    }
    
    // Prevent multiple consecutive operators except at start
    if (['+', '-', '*', '/', '%'].includes(value)) {
        if (['+', '-', '*', '/', '%'].includes(current.slice(-1)) && current !== '') {
            return;
        }
        displayEl.value += value;
        return;
    }
    
    // Numbers and decimal
    if (!isNaN(value) || value === '.') {
        // Prevent multiple decimals
        if (value === '.' && current.includes('.')) {
            return;
        }
        displayEl.value += value;
    }
}

function calculatePercentage() {
    let val = parseFloat(displayEl.value);
    if (!isNaN(val)) {
        displayEl.value = (val / 100).toString();
    }
}

function calculate() {
    let expr = displayEl.value.trim();
    if (expr === '' || expr === '0') {
        displayEl.value = '0';
        calculationCompleted = true;
        return;
    }
    try {
        let safeExpr = expr.replace(/×/g, '*').replace(/÷/g, '/');
        let result = Function('"use strict"; return (' + safeExpr + ')')();
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid');
        }
        displayEl.value = parseFloat(result.toFixed(8)).toString().replace(/\.?0+$/, '') || '0';
        calculationCompleted = true;
    } catch (e) {
        displayEl.value = 'E';
        calculationCompleted = true;
    }
}



function clearDisplay() {
    displayEl.value = '0';
    currentInput = '';
    operator = null;
    previousInput = 0;
}

function deleteValue() {
    if (displayEl.value.length > 1) {
        displayEl.value = displayEl.value.slice(0, -1);
    } else {
        displayEl.value = '0';
    }
}


