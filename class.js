var dice;
 

var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

var stopped = true;
var t;

function change() {
    var random = Math.floor( Math.random() * 6) ; //0 to 5
    dice .innerHTML = dices[random] 
}

function stopstart() {
    if (stopped) {
        stopped = false
        t = setInterval( change , 500)
    } else {
        clearInterval(t)
        stopped = true
    }
}


//initialize the dice on page load and start rolling

window.onload = function () { 
dice = document.getElementById("dice");
stopstart()
} 






























