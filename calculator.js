const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => {
    if (operator === plus) {
        return add(a, b);
    }
    else if (operator === minus) {
        return subtract(a, b);
    }
    else if (operator === times) {
        return multiply(a, b);
    }
    else if (operator === divBy) {
        return divide(a, b);
    }
};
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const times = document.querySelector('#multiply');
const divBy = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const display = document.querySelector('#window');
const numbers = document.querySelector('.numbers').childNodes;
const point = document.querySelector('#point');

let operator = '';
let display_value = '';
let calc = false;
let decimal = false;

function decimalCheck (){
    if (decimal == false) {
        point.disabled = false;
    }
    else{
        point.disabled = true;
    }
}

clear.addEventListener('click', function(){
    display.textContent = '';
    display_value = '';
    operator = '';
    decimal = false;
})

numbers.forEach(number => {
    number.addEventListener('click', function(){
        if (calc == true) {
            display.textContent = '';
        }
        calc = false;
        display.textContent += number.textContent;
        if (display.textContent.match(/\./) != null){
            decimal = true;
        }
        decimalCheck();
    })
})

plus.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = plus;
    calc = true;
    decimal = false;
})

minus.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = minus;
    calc = true;
    decimal = false;
})

times.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = times;
    calc = true;
    decimal = false;
})

divBy.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = divBy;
    calc = true;
    decimal = false;
})

equals.addEventListener('click', function(){
    display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    operator = '';
    decimal = false;
})