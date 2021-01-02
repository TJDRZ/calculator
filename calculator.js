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
let display_value = display.textContent;
let operator = '';

clear.addEventListener('click', function(){
    display.textContent = '';
    display_value = '';
    operator = '';
})

numbers.forEach(number => {
    number.addEventListener('click', function e(){
        display.textContent += number.textContent;
    })
})

plus.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = plus;
    display.textContent = '';
})

minus.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = minus;
    display.textContent = '';
})

times.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = times;
    display.textContent = '';
})

divBy.addEventListener('click', function(){
    if (operator != '') {
        display.textContent = operate(operator, Number(display_value), Number(display.textContent));
    }
    display_value = display.textContent;
    operator = divBy;
    display.textContent = '';
})

equals.addEventListener('click', function(){
    display.textContent = operate(operator, Number(display_value), Number(display.textContent));
})