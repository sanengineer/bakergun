let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector(".win-lose-draw-status");
let humanButtonChoose = document.getElementsByClassName(".human-button-choose");

let humanChooseRock = document.getElementById("humanButtonHandRock");
let humanChoosePaper = document.getElementById("humanButtonHandPaper");
let humanChooseScissors = document.getElementById("humanButtonHandScissors");

let visibleStartMan = document.getElementById("humanHandStart");
let visibleRockMan = document.getElementById("humanHandRock");
let visiblePaperMan = document.getElementById("humanHandPaper");
let visibleScissorsMan = document.getElementById("humanHandScissors");

document
  .getElementById("humanButtonHandRock")
  .addEventListener("click", visibleRockHuman);

document
  .getElementById("humanButtonHandPaper")
  .addEventListener("click", visiblePaperHuman);

document
  .getElementById("humanButtonHandScissors")
  .addEventListener("click", visibleScissorsHuman);

function visibleRockHuman() {
  visibleStartMan.style.display = "none";
  visibleRockMan.style.display = "block";
}

function visiblePaperHuman() {
  visibleStartMan.style.display = "none";
  visiblePaperMan.style.display = "block";
}

function visibleScissorsHuman() {
  visibleStartMan.style.display = "none";
  visibleScissorsMan.style.display = "block";
}

// humanChoosePaper.addEventListener("click", visiblePaperHuman());
// humanChooseScissors.addEventListener("click", visibleScissorsHuman());
