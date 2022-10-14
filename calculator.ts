const add = document.querySelector("#add") as HTMLButtonElement;
const subtract = document.querySelector("#subtract") as HTMLButtonElement;
const multiply = document.querySelector("#multiply") as HTMLButtonElement;
const divide = document.querySelector("#divide") as HTMLButtonElement;
const equate = document.querySelector("#equate") as HTMLButtonElement;
const clear = document.querySelector("#clear") as HTMLButtonElement;
const backspace = document.querySelector("#backspace") as HTMLButtonElement;
const display = document.querySelector("#display") as HTMLDivElement;
const numbers = document?.querySelector(".numbers")?.childNodes;
const decimal = document.querySelector("#decimal") as HTMLButtonElement;

let operator = "";
let displayPrevValue = 0;
let calc = false;

const operate = (operator: string, a: number, b: number): number => {
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

const decimalCheck = (): void => {
  display.textContent?.match(/\./)
    ? (decimal.disabled = true)
    : (decimal.disabled = false);
};

clear.addEventListener("click", () => {
  display.textContent = "";
  displayPrevValue = 0;
  operator = "";
  decimalCheck();
});

backspace.addEventListener("click", () => {
  display.textContent = display?.textContent?.slice(0, -1) || '0';
  decimalCheck();
});

numbers?.forEach((number) => {
  number.addEventListener("click", () => {
    if (calc === true) {
      display.textContent = "";
      calc = false;
    }
    display.textContent += number.textContent || '0';
    decimalCheck();
  });
});

add.addEventListener("click", () => {
  if (operator != "") {
    display.textContent = operate(
      operator,
      displayPrevValue,
      parseFloat(display.textContent || '0')
    ).toString();
  }
  displayPrevValue = parseFloat(display.textContent || '0');
  operator = "add";
  calc = true;
  decimalCheck();
});

subtract.addEventListener("click", () => {
  if (operator != "") {
    display.textContent = operate(
      operator,
      displayPrevValue,
      parseFloat(display.textContent || '0')
    ).toString();
  }
  displayPrevValue = parseFloat(display.textContent || '0');
  operator = "subtract";
  calc = true;
  decimalCheck();
});

multiply.addEventListener("click", () => {
  if (operator != "") {
    display.textContent = operate(
      operator,
      displayPrevValue,
      parseFloat(display.textContent || '0')
    ).toString();
  }
  displayPrevValue = parseFloat(display.textContent || '0');
  operator = "multiply";
  calc = true;
  decimalCheck();
});

divide.addEventListener("click", () => {
  if (operator != "") {
    display.textContent = operate(
      operator,
      displayPrevValue,
      parseFloat(display.textContent || '0')
    ).toString();
  }
  displayPrevValue = parseFloat(display.textContent || '0');
  operator = "divide";
  calc = true;
  decimalCheck();
});

equate.addEventListener("click", () => {
  display.textContent = operate(
    operator,
    displayPrevValue,
    parseFloat(display.textContent || '0')
  ).toString();
  operator = "";
  decimalCheck();
});
