let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector(".win-lose-draw-status");
let humanButtonChoose = document.querySelectorAll(".human-button-choose");

for (let i = 0; i < humanButtonChoose.length; i++) {
  humanButtonChoose[i].addEventListener("click", startGame());
}

function startGame() {
  winLoseDrawStatus.style.background = "blue";
}

console.log(humanButtonChoose);
