let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add(){
    sumEl.textContent = "Sum: "
    let addition = num1 + num2
    sumEl.textContent += addition
}

function substract(){
    sumEl.textContent = "Sum: "
    let substraction = num1 - num2
    sumEl.textContent += substraction
}

function divide(){
    sumEl.textContent = "Sum: "
    let divition = num1 / num2
    sumEl.textContent += divition
}

function multiply(){
    sumEl.textContent = "Sum: "
    let multiplication = num1 * num2
    sumEl.textContent += multiplication
}