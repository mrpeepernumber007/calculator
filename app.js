//Create html elements and variables

const numbers = document.querySelectorAll('.numbers')
const visor = document.querySelector('.visor')
const clearBtn = document.querySelector('.clear')
const operators = document.querySelectorAll('.operators')
const equalSign = document.querySelector('.equals')


let num1 = ''
let num2 = ''
let operator = ''
let result

let activeOp = false
let addition = false
let subtraction = false
let multiplication = false
let division = false

//Operation functions
function add (a, b) {
    return a + b
}
function subtract (a, b) {
    return a - b
}
function multiply (a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}

//Check operation choice
function operate(n1, n2, opt) {
    let res
    switch (opt) {
        case '+':
            res = add(n1, n2)
            break;
        case '-':
            res = subtract(n1, n2)
            break;
        case '*':
            res = multiply(n1, n2)
            break;
        case '/':
            if(n2 === 0) {
                clearValues('clear')
                updateVisor('You broke the universe!')
                return;
            }
            res = divide(n1, n2)
            break;
    }
    return res
}

function updateVisor (string) {
    visor.textContent = ''
    visor.textContent += string
}

function clearValues(clearOrNot) {
    num1 = ''
    num2 = ''
    operator = ''
    activeOp = false
    if(arguments[0] === 'clear'){
        updateVisor('')
        result = ''
    }
}

clearBtn.addEventListener('click', () => clearValues('clear'))

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if((result) || (result === 0)) {num1 = result}
        if(activeOp) {
            num2 += num.value
            updateVisor(num2)
        }
        else {
            num1 += num.value
            updateVisor(num1)
        }
    })
})

operators.forEach((opt) => {
    opt.addEventListener('click', () => {
        activeOp = true
        updateVisor(opt.value)
        operator = opt.value
    })
})

equalSign.addEventListener('click', () => {
    num1 = +num1
    num2 = +num2
    result = operate(num1, num2, operator)
    updateVisor(result)
    clearValues()
})


//when activeOp is true, equal sign flips it back to false

//btn back use pop(), or pop() after Array.from(), then join('')