document.addEventListener('DOMContentLoaded', createGameBoard);

const cardArray = [{
name: "condemn",
image: "images/condemn"
},
{
    name: "condemn",
    image: "image/condemn.png"
},
{
    name: "condemn",
    image: "image/condemn.png"
},
{
    name: "flurry",
    image: "image/flurry.png"
},
{
    name: "flurry",
    image: "image/flurry.png"
},
{
    name: "kindling",
    image: "image/kindling.png"
},
{
    name: "kindling",
    image: "image/kindling.png"
},
{
    name: "pride",
    image: "image/pride.png"
},
{
    name: "pride",
    image: "image/pride.png"

},
{
    name: "sunwell",
    image: "image/sunwell.png"

},
{
    name: "sunwell",
    image: "image/sunwell.png"
},
{
    name: "tavish",
    image: "image/tavish.png"
},
{
    name: "tavish",
    image: "image/tavish.png"

},
{
    name: "white",
    image: "image/white.png"

},
{
    name: "white",
    image: "image/white.png"
}]




function createGameBoard() {

    let gameboard = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = "grid";

    for (let i = 0; 1< 12; i++) {
        let item = document.createElement('div');
        item.className = 'item';
    let card = document.createElement('img');
    card.setAttribute('src','image/card_back.png');
    card.setAttribute('id',i);
    card.addEventListener('click',flipCard);
    item.appendChild(card)
    gridContainer.appendChild(item);

}
gameboard.appendChild(gridContainer)

cardArray.sort (() => 0.5 - Math.random())
}

let cardChoosen = []


function flipCard() {
    let cardId = this.getAttribute('id');
    this.getAttribute('src', cardArray[cardId],image);
    cardChoosen.push(cardArray[cardId]);
    if (cardChoosen.length === 2){
        checkForMatch();
    }
}

function checkForMatch() {
    if (cardChoosen[0].name == cardChoosen[1].name){
        alert("Match");
    }else {
        alert("Not Match");
    }

    cardChoosen = []
    }
    
