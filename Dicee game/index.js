var firstDice = Math.floor(Math.random() * 6) + 1; // 1 - 6

var secondDice = Math.floor(Math.random() * 6) + 1;

var randomFirstImage = "images/dice"+firstDice+".png"; // images/dice123456.png "random"

var randomSecondImage = "images/dice"+secondDice+".png";

document.querySelector("img.img1").setAttribute("src", randomFirstImage); // change the html element to random png images 

document.querySelector("img.img2").setAttribute("src", randomSecondImage);


if (firstDice > secondDice) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (secondDice > firstDice) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}

console.log(firstDice);
console.log(secondDice);

