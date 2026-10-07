// Store the scores
let userScore = 0;
let compScore = 0;

// Get HTML elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate a random choice for the computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const randIdx = Math.floor(Math.random() * 3);

  return options[randIdx];
};

// Show draw message
const drawGame = () => {
  msg.innerText = "🤝 It's a Draw! Play Again.";
  msg.style.backgroundColor = "#081b31";
};

// Show winner and update score
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `🎉 You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `😔 You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main game function
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Add click event to Rock, Paper, and Scissors
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the clicked choice's id
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
