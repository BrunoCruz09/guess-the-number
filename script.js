'use strict';

//function to generate random number between 1 and 20
const guessNumber = () => {
    const secretNumber = Math.trunc(Math.random()*20) + 1;
    return secretNumber
}

/*Variables*/
let secretNumber = guessNumber
let score = 20
let highScore = 0

/*EventListener to check all game rules*/
document.querySelector('.check').addEventListener('click', function () {
    //variable to save the number from input element
    const guess = Number(document.querySelector('.guess').value)
})

/*EventListener to reset game*/
document.querySelector('again').addEventListener('click'. function () {
})