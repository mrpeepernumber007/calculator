//Create html elements and variables

const numbers = document.querySelectorAll('.numbers')
const visor = document.querySelector('.visor')
const clearBtn = document.querySelector('.clear')
const operators = document.querySelectorAll('.operators')
const equalSign = document.querySelector('.equals')
const backSpace = document.querySelector('.delete')


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
    let res = 'operador desconocido'
    n1 = +n1
    n2 = +n2
    console.log('operator is ' + opt);
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
    activeOp = false
    let args = Array.from(arguments)
    if(args.includes('clear')){
        updateVisor('')
        result = ''
    }
    if(args.includes('delete Operator')) {
        operator = ''
    }
}

clearBtn.addEventListener('click', () => clearValues('clear'))

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if((result) || (result === 0)) {num1 = result}
        if(activeOp) {
            num2 += +num.value
            updateVisor(num2)
        }
        else {
            num1 += +num.value
            updateVisor(num1)
        }
    })
})

operators.forEach((opt) => {
    opt.addEventListener('click', () => {
        activeOp = true
        updateVisor(opt.value)
        if(num2) {
            calculate()
        }
        operator = opt.value
        console.log('operador en operatorsEL es ' + operator);
    })
})

equalSign.addEventListener('click', () => {
    console.log('operador en equal sign es ' + operator);
    calculate()
})

function calculate() {
    num1 = +num1
    num2 = +num2
    // if(!num1) {
    //     result = operate(result, num2, operator)
    //     clearValues('delete Operator')
    // } else {
    //     result = operate(num1, num2, operator)
    // }
    result = operate(num1, num2, operator)
    updateVisor(result)
    // clearValues('delete Operator')
    clearValues()
    activeOp = true
}

backSpace.addEventListener('click', () => {
    let n1 = Array.from(num1)
    let n2 = Array.from(num2)
    if(visor.textContent === num1) {
        n1.pop()
        n1 = n1.join('')
        num1 = n1
        updateVisor(num1)
    } else if(visor.textContent === num2) {
        n2.pop()
        n2 = n2.join('')
        num2 = n2
        updateVisor(num2)
    } else if (visor.textContent === operator) {
        operator = ''
        updateVisor(operator)
    }
})