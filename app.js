let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultParagraph = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const convertToWord = (letter) => {
    switch (letter) {
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Scissors";
    }
};

const win = (userChoice, computerChoice) => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultParagraph.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). YOU win!`;
    const userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 3000);
};

const lose = (userChoice, computerChoice) => {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultParagraph.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). YOU lost!`;
    const userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 3000);
};

const draw = (userChoice, computerChoice) => {
    resultParagraph.innerHTML = `${convertToWord(userChoice)}(user) equals ${convertToWord(computerChoice)}(comp). GAME draw!`;
    const userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 3000);
};

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
};

const main = () => {
    rockDiv.addEventListener('click', () => game("r"));
    paperDiv.addEventListener('click', () => game("p"));
    scissorsDiv.addEventListener('click', () => game("s"));
};

main();
