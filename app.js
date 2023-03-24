// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// function add(){
//     sumEl.textContent = "Sum: "
//     let addition = num1 + num2
//     sumEl.textContent += addition
// }

// function substract(){
//     sumEl.textContent = "Sum: "
//     let substraction = num1 - num2
//     sumEl.textContent += substraction
// }

// function divide(){
//     sumEl.textContent = "Sum: "
//     let divition = num1 / num2
//     sumEl.textContent += divition
// }

// function multiply(){
//     sumEl.textContent = "Sum: "
//     let multiplication = num1 * num2
//     sumEl.textContent += multiplication
// }

// let age = 11

// if (age < 21) {
//     console.log("You cannot enter the club!")
// } else {
//     console.log("Welcome!")
// }

// let age = 122

// if (age < 100) {
//     console.log("You are not eligible")
// } else if (age === 100) {
//     console.log("Here is your Birthday card from the King")
// } else {
//     console.log("Not Eligible, you have already gotten one")
// }


// let featuredPosts = [
//     "checkout my netflix clone", 
//     "Here is the code for my projects",
//     "I've just relunched my portfolio"
// ]

// console.log(featuredPosts.length)

// let experience = [
//     "CEO of Scrimba",
//     "Frontend developer at Xeneta",
//     "People counter man at hyst"
// ]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// let mySelf = [
//     "Ganiyu Sodiq",
//     31,
//     true
// ]

// console.log(mySelf[1])

// ADDING ITEM TO THE ARRAY

// let cards = [7, 6]

// cards.push(4)

// console.log(cards)

// let messages = [
//     "hey, how is it going?",
//     "i'm great, how about you!",
//     "All good. Been working on my portfolio lately"
// ]

// let newMessage = "Same here."

// messages.push(newMessage)

// console.log(messages)

// messages.pop()

// console.log(messages)

// COUNT IN JAVASCRIPT USING FOR LOOP

// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }

// for (let i = 10; i < 101; i += 10){
//     console.log(i)
// }

// let messages = [
//     "hey, how is it going?",
//     "i'm great, how about you!",
//     "All good. Been working on my portfolio lately"
// ]

// messages.push("Same Here")

// for (let i = 0; i < messages.length; i++){
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i ++) {
//     console.log("number " + cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Sodiq"]

// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }

let player1time = 102
let player2time = 107

function getFastestRaceTime() {
    if (player1time < player2time){
        return player1time
    } else if (player2time < player1time){
        return player2time
    } else{
        return player1time
    }
}

// let fastestRaceTime = getFastestRaceTime()

// console.log(fastestRaceTime)

// function getTotalRaceTime() {
//     return player1time + player2time
// }

// let totalTaceTime = getTotalRaceTime()

// console.log(totalTaceTime)

// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// let florredNumber = Math.floor(3.55621)
// console.log(florredNumber)

let randomNumber = Math.floor( Math.random() * 6 ) + 1
console.log(randomNumber)