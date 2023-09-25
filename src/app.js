/* eslint-disable */
import "bootstrap";
import "./style.css";
// ♦ ♥ ♠ ♣

let symbols = {
  diamond: "♦",
  heart: "♥",
  spade: "♠",
  trebol: "♣"
};

let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let symbolsKeys = Object.keys(symbols);

window.onload = function() {
  showCard();
};

function showCard() {
  let randomSymbol = Math.floor(Math.random() * symbolsKeys.length);
  let chosenSymbol = symbolsKeys[randomSymbol];
  let randomNumber = Math.floor(Math.random() * numbers.length);

  document.getElementById("firstSymbol").innerHTML = symbols[chosenSymbol];
  document.getElementById("secondSymbol").innerHTML = symbols[chosenSymbol];
  document.getElementById("number").innerHTML = numbers[randomNumber];

  document.getElementById("firstSymbol").style.fontSize = "100px";
  document.getElementById("secondSymbol").style.fontSize = "100px";
  document.getElementById("number").style.fontSize = "150px";

  if (chosenSymbol == "diamond" || chosenSymbol == "heart") {
    document.getElementById("firstSymbol").style.color = "red";
    document.getElementById("secondSymbol").style.color = "red";
  } else {
    document.getElementById("firstSymbol").style.color = "black";
    document.getElementById("secondSymbol").style.color = "black";
  }
}
