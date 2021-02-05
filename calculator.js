const button = document.querySelectorAll('.buttons .row button');
const screen = document.querySelector('.screen');
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operaions = ['divide', 'multiply', 'subtract', 'add'];
let result = '';
let numberNow = '';
let operation = ''; 

function calculate(operation) {
    switch (operation) {
        case 'divide':
            result = (parseInt(result) / parseInt(numberNow)).toString().substring(0, 11);
            break;
        case 'multiply':
            result = (parseInt(result) * parseInt(numberNow)).toString().substring(0, 11);
            break;
        case 'subtract':
            result = (parseInt(result) - parseInt(numberNow)).toString().substring(0, 11);
            break;
        case 'add':
            result = (parseInt(result) + parseInt(numberNow)).toString().substring(0, 11);
            break;
    }
    return (result)
}

function numberDisplay(event, number) {
    if (numberNow.length <= 11) {      
        numberNow += number;
        numberNow = parseInt(numberNow).toString();           
        screen.innerText = numberNow;
    }
}

function operate(value) {
    operation = value;    
    screen.innerText = '0';
    if (result && numberNow) {
        result = calculate(operation);
    }
    else if (numberNow) {
        result = numberNow;
    }
    numberNow = '';
}

function showReult(event) {
    if (result) {
        operate(operation)
        screen.innerText = result;
        if (result === 'NaN' || result == 'Infinity') {
            result = '';
            numberNow = ''
        }
        else {
            numberNow = result;
            result = '';
        }
    }
    else {
        if (numberNow) {
            screen.innerText = numberNow;
        }
        else {
            screen.innerText = '0';
        }    
    } 
}

function clear(event) {
    screen.innerText = '0';
    result = '';
    numberNow = '';
    operation = '';
}

function deleteValue(event) {
    numberNow = numberNow.substring(0, numberNow.length - 1);
    if (numberNow) {
        screen.innerText = numberNow;
    }
    else {
        screen.innerText = '0';
    }  
}

for (let i = 0; i < button.length; i++) {
    let className = button[i].className.split(' ')[0];
    if (numbers.includes(className)) {
        button[i].addEventListener('click', function () { numberDisplay(event, className); });
    }
    else if (operaions.includes(className)) {
        button[i].addEventListener('click', function () { operate(className); });
    }
    else if (className === 'equal') {
        button[i].addEventListener('click', function () { showReult(event); });
    }
    else if (className === 'clear') {
        button[i].addEventListener('click', function () { clear(event); });
    }
    else {
        button[i].addEventListener('click', function () { deleteValue(event); });
    }
}

