var _a;
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var equate = document.querySelector("#equate");
var clear = document.querySelector("#clear");
var backspace = document.querySelector("#backspace");
var display = document.querySelector("#display");
var numbers = (_a = document === null || document === void 0 ? void 0 : document.querySelector(".numbers")) === null || _a === void 0 ? void 0 : _a.childNodes;
var decimal = document.querySelector("#decimal");
var operator = "";
var displayPrevValue = 0;
var calc = false;
var operate = function (operator, a, b) {
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return 0;
    }
};
var decimalCheck = function () {
    var _a;
    ((_a = display.textContent) === null || _a === void 0 ? void 0 : _a.match(/\./))
        ? (decimal.disabled = true)
        : (decimal.disabled = false);
};
clear.addEventListener("click", function () {
    display.textContent = "";
    displayPrevValue = 0;
    operator = "";
    decimalCheck();
});
backspace.addEventListener("click", function () {
    var _a;
    display.textContent = ((_a = display === null || display === void 0 ? void 0 : display.textContent) === null || _a === void 0 ? void 0 : _a.slice(0, -1)) || '0';
    decimalCheck();
});
numbers === null || numbers === void 0 ? void 0 : numbers.forEach(function (number) {
    number.addEventListener("click", function () {
        if (calc === true) {
            display.textContent = "";
            calc = false;
        }
        display.textContent += number.textContent || '0';
        decimalCheck();
    });
});
add.addEventListener("click", function () {
    if (operator != "") {
        display.textContent = operate(operator, displayPrevValue, parseFloat(display.textContent || '0')).toString();
    }
    displayPrevValue = parseFloat(display.textContent || '0');
    operator = "add";
    calc = true;
    decimalCheck();
});
subtract.addEventListener("click", function () {
    if (operator != "") {
        display.textContent = operate(operator, displayPrevValue, parseFloat(display.textContent || '0')).toString();
    }
    displayPrevValue = parseFloat(display.textContent || '0');
    operator = "subtract";
    calc = true;
    decimalCheck();
});
multiply.addEventListener("click", function () {
    if (operator != "") {
        display.textContent = operate(operator, displayPrevValue, parseFloat(display.textContent || '0')).toString();
    }
    displayPrevValue = parseFloat(display.textContent || '0');
    operator = "multiply";
    calc = true;
    decimalCheck();
});
divide.addEventListener("click", function () {
    if (operator != "") {
        display.textContent = operate(operator, displayPrevValue, parseFloat(display.textContent || '0')).toString();
    }
    displayPrevValue = parseFloat(display.textContent || '0');
    operator = "divide";
    calc = true;
    decimalCheck();
});
equate.addEventListener("click", function () {
    display.textContent = operate(operator, displayPrevValue, parseFloat(display.textContent || '0')).toString();
    operator = "";
    decimalCheck();
});
