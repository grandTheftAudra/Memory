//Audra Lawler
//NEWM-N220-25079
//4-28-2017
//Create a version of the 'classic' game of memory (aka concentration). There should be a 4 x 4 grid of cards laid out face-down in front of the user. When clicked, reveal the face of a card. When a second card is tapped, reveal the face of that card as well. If the two cards match, remove them from the game. If they don’t, return them to face-down and allow the user to choose two more.
//---Requirements---
//--A 4x4 grid of facedown cards
//--Reveal the value of a facedown card on click
//--If two revealed cards match, remove them
//--If two revealed cards do not match, return them to face down
//--A ‘replay game’ option when the game is over
//--Use setTimeout to keep both face up cards visible for six seconds before hiding / removing them


//get array for all boxes
var cards = document.querySelectorAll(".facedown");

//loop through cards  and put event listener on each
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', processClick);
}

//make array to count clicks
var clickArray = [];

//create a function to occur upon event click
function processClick(event) {
  if (clickArray.length < 2) { 
    //find card color attribute
    var getCardColor = event.target.getAttribute('data-color'); 
    //set the card to color attribute
    event.target.style.backgroundColor = getCardColor;
    //put id and color into array
    clickArray.push(new Array(event.target.getAttribute('id'), getCardColor));
    console.log(clickArray);
  }
  if (clickArray.length == 2) {
    //set timeout 6 seconds
    setTimeout(function () {
      if (clickArray[0][1] == clickArray[1][1]) {
        //remove clickArray[0][0] and clickArray[1][0]
        document.querySelector('#' + clickArray[0][0]).remove();
        document.querySelector('#' + clickArray[1][0]).remove();
        var cardCount = document.querySelectorAll(".facedown");
//        alert(cardCount.length);
          // add check for card divs and if none, show refresh button that reloads page
        setTimeout(function () {
          if (cardCount.length == 0) {
            if (confirm("A winner is you. Would you like to play again?")) {
                window.location.reload();
            }
          }
        }, 500);
        //alert("remove matching cards");
      } else {
        //flip cards back over
        //alert("flip cards back over");
        document.querySelector('#' + clickArray[0][0]).style.backgroundColor = "antiquewhite";
        document.querySelector('#' + clickArray[1][0]).style.backgroundColor = "antiquewhite";
      }
      clickArray = [];
    }, 6000);
  }
}
