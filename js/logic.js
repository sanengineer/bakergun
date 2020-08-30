// var botImgItem = document.querySelector(".bot-choice");

// let rockPlayer = document.getElementById("rcPl").focus();
// let paperPlayer = document.querySelector("#prPl");
// let scissorsPlayer = document.querySelector("#scPl");
// let rockBot = document.getElementById("Bot").children[1];
// let paperBot = document.getElementById("Bot").children[2];
// let scissorsBot = document.getElementById("Bot").children[3];

// var randomBot = Math.floor(Math.random() * 3) + 1;

function getBotFocus() {
  //   document.getElementsById("botChoice").src = botImg[randomImg];
  //   document.botChoose. = botChoose[randomBot];
  //   document.getElementById("Bot")[randomBot].focus();
  //   botChoose.classList.add("btn-primary:focus");
  //   var randomBot = Math.floor(Math.random() * 3);
  //   const botChos = document.getElementsByTagName("input")[randomBot];

  //   var childBotButton = document.getElementById("Bot").childNodes;

  var c = Math.floor(Math.random() * 3);
  document.getElementById("Bot").children[c].focus();

  //   document.getElementById("Bot").children[c].classList.add("my-class");
  //   document.getElementById("Bot").children[c].classList.remove("my-class");
  //   document.getElementById("Bot").children[c].classList.add("my-class");
}

// var s = document.getElementById("Human").children[c].classList.add("my-class")

// do {
//     text += "<br>The number is " + i;
//     i++;
//   }
//   while (i < 10);

// const humanChooseVar = document.querySelectorAll("#HumanChoose");
// for (let i = 0; i < humanChooseVar.length; i++) {
//   humanChooseVar[i].addEventListener("click", humanChooseFunction);
// }

// function humanChooseFunction() {
//     document.getElementById("humanChoose").classList.add("my-class");
//   document.getElementById(humanChoose)
//   document.getElementById("humanChoose").style.backgroundColor = "#ffc106";
// }
