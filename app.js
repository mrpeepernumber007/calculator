const num1 = ''
const num2 = ''
const operator = ''


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

function operate(n1, n2, opt) {
    switch (opt) {
        case add:
            add(n1, n2)
            break;
        case subtract:
            subtract(n1, n2)
            break;
        case multiply:
            multiply(n1, n2)
            break;
        case divide:
            div(n1, n2)
            break;
    }
}
