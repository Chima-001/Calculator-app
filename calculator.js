let displayEl = document.getElementById(`display`)
displayEl.value = ``;
let result = 0
let calculationCompleted = false
let currentInput = 0

//study this code below//
function key(value){
    if (calculationCompleted && !isNaN(value)){
        displayEl.value = value;
        calculationCompleted = false;
    } else if (calculationCompleted && isNaN(value) //&& value !== '.'
    ){
        displayEl.value += value;
        calculationCompleted = false;
    } else if (displayEl.value === 0 && !isNaN(value)){
        displayEl.value = value;
    } else if (displayEl.value.includes(`E`)){
        displayEl.value = value
    } /*else if (calculationCompleted && key('.')){
        displayEl.value = `.` 
        calculationCompleted = false
    }*/ else {
        displayEl.value += value;
    }
}

function calculatePercentage(){
    let percentageValue = displayEl.value
    if (value = `%`){
        percentageValue += `/100`;
        displayEl.value = eval(percentageValue)
    }
}

function calculate(){
    try{ 
        result = eval(displayEl.value);
        displayEl.value = result;
    }
    catch {
        if (displayEl.value === value + `` || displayEl.value === `` + value){
            displayEl.value = value
        }
       else { displayEl.value = `E`;
    }
}
    calculationCompleted = true
}

function clearDisplay(){
    displayEl.value = null;
}

function deleteValue(){
    displayEl.value = displayEl.value.slice(0, - 1)
}


/*if (displayEl.value.includes(`E`) || displayEl.value.includes(result)){
    displayEl.value = value;
} else {
    displayEl.value += value;
}*/