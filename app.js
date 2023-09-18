//Create html elements and variables
const container = document.querySelector('.container')
const result = document.createElement('div')
result.classList.add('res')
container.appendChild(result)

const num1 = ''
const num2 = ''
const operator = ''

//Operation functions
function add (a, b) {
    return result.textContent = `${a + b}`
}
function subtract (a, b) {
    return result.textContent = `${a - b}`
}
function multiply (a, b) {
    return result.textContent = `${a * b}`
}
function divide (a, b) {
    return result.textContent = `${a / b}`
}

//Check operation choice
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

//Prompt calculation
function calculator () {
    const number1 = +prompt('First number: ')
    const number2 = +prompt('Second number: ')
    const operation = prompt('Operation: ').toLowerCase()
    operate(number1, number2, operation)
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', calculator)