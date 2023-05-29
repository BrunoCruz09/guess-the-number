"use strict";

//function present diferent message in front
const message = (message) => {
    document.querySelector(".message").textContent = message;
};

//function to generate random number between 1 and 20
const guessNumber = () => {
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    return secretNumber;
};

//function to change color background if win or reset
const changeBackground = (color) => {
    document.querySelector("body").style.backgroundColor = color;
};

//function to change width number if win or reset
const changeWidth = (width) => {
    document.querySelector(".number").style.width = width;
};

//function to change score
const changeScore = (score) => {
    document.querySelector('.score').textContent = score
}

/*Variables*/
let secretNumber = guessNumber();
let score = 20;
let highScore = 0;

/*EventListener to check all game rules*/
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess || guess > 20) {
        message("⛔ Mumbers between 1 and 20 are allowed!");
    } else if (guess === secretNumber) {
        message("🥳 Correct number!!");
        changeBackground("#60b347");
        changeWidth("30rem");
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else {
        if (score > 1) {
            message(guess > secretNumber ? "To high!" : "To low!");
            score--;
            changeScore(score);
        } else {
            message("You lost the game!");
            changeScore(0);
        }
    }
});

/*EventListener to reset game*/
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = guessNumber();
    console.log(secretNumber);
    message("Start guessing...");
    changeScore(score);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    changeBackground("#222");
    changeWidth("15rem");
});
