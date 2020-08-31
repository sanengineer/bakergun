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

let visibleStartBot = document.getElementById("botHandStart");
let visibleRockBot = document.getElementById("botHandRock");
let visiblePaperBot = document.getElementById("botHandPaper");
let visibleScissorsBot = document.getElementById("botHandScissors");

let newRound = document.querySelector(".new-round-button");

var randomBotChoose = Math.floor(Math.random() * 2);
var botNodeList = document.querySelectorAll(".bot-hand-choice");

var botFaceStartData = [
  ("/assets/images/bot-face-start-2.png", "/assets/images/bot-face-start.png"),
];
var randomBotFace = Math.floor(Math.random() * botFaceStartData.length);

document
  .getElementById("humanButtonHandRock")
  .addEventListener("click", visibleRockHuman);

document
  .getElementById("humanButtonHandPaper")
  .addEventListener("click", visiblePaperHuman);

document
  .getElementById("humanButtonHandScissors")
  .addEventListener("click", visibleScissorsHuman);

document
  .getElementById("newRoundButton")
  .addEventListener("click", newRoundFunc);

function visibleRockHuman() {
  visibleStartMan.style.display = "none";
  visibleRockMan.style.display = "block";
  visibleStartBot.style.display = "none";
  botNodeList[randomBotChoose].style.display = "block";
}

function visiblePaperHuman() {
  visibleStartMan.style.display = "none";
  visiblePaperMan.style.display = "block";
  visibleStartBot.style.display = "none";
  botNodeList[randomBotChoose].style.display = "block";
}

function visibleScissorsHuman() {
  visibleStartMan.style.display = "none";
  visibleScissorsMan.style.display = "block";
  visibleStartBot.style.display = "none";
  botNodeList[randomBotChoose].style.display = "block";
}

function newRoundFunc() {
  visibleStartMan.style.display = "block";
  visibleRockMan.style.display = "none";
  visiblePaperMan.style.display = "none";
  visibleScissorsMan.style.display = "none";

  visibleStartBot.style.display = "block";
  visibleRockBot.style.display = "none";
  visiblePaperBot.style.display = "none";
  visibleScissorsBot.style.display = "none";

  //   document.getElementById("botFace").src = ;
}
