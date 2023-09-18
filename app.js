const num1 = ''
const num2 = ''
const operator = ''


function add (a, b) {
    return console.log(a+b);
}
function subtract (a, b) {
    return console.log(a-b);
}
function multiply (a, b) {
    return console.log(a*b);
}
function divide (a, b) {
    return console.log(a/b);
}

function operate(n1, n2, opt) {
    switch (opt) {
        case 'add':
            add(n1, n2)
            break;
        case 'subtract':
            subtract(n1, n2)
            break;
        case 'multiply':
            multiply(n1, n2)
            break;
        case 'divide':
            divide(n1, n2)
            break;
    }
}

function calculator () {
    const number1 = +prompt('First number: ')
    const number2 = +prompt('Second number: ')
    const operation = prompt('Operation: ')
    operate(number1, number2, operation)
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', calculator)