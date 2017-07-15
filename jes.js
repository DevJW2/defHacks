var random = 0;
var input = 0;
var score = 0;
var interval;
var randomPosition = Math.floor((Math.random() * 300) + 1);
var randomPosition1 = Math.floor((Math.random() * 300) + 1);

window.addEventListener("keydown", checkKeyPressed, false);
 function checkKeyPressed(e) {
     console.log(e.keyCode);
     if (e.keyCode >= 65 && e.keyCode <= 90) {
         input = e.keyCode;
         
         document.getElementById('displayPressed').innerText = String.fromCharCode(input);
         if (input == random) {
             score++;
             document.getElementById('scoredisplay').innerText = 'Score: ' + score;
         }
     }
 } 
        

function randomize() {
    random = Math.floor((Math.random() * 26) + 65);
    document.getElementById('generationdisplay').innerText = String.fromCharCode(random);
}

function startGame() {
    interval = setInterval(randomize, 750);
}

function stopGame() {
    clearInterval(interval);
    score = 0;
    document.getElementById('scoredisplay').innerText = 'Score: ' + score;
}
function SongEnd() {
    var songends = document.getElementById("myAudio").ended;
    if (songends){
        stopGame();
    } 
    
}

/*function convertLetters() {
    var y = document.getElementById("generationdisplay");
    if (y === 1){
        y.innerHTML = "A";
    }
    if (y == 2){
        y = "B";
    }
    if (y == 3){
        y = "C";
    }
    if (y == 4){
        y = "D";
    }
    if (y == 5){
        y = "E";
    }
    if (y == 6){
        y = "F";
    }
    if (y == 7){
        y = "G";
    }
    if (y === 8){
        y.innerHTML = "H";
    }
    if (y == 9){
        y = "I";
    }
    if (y == 10){
        y = "J";
    }
    if (y == 11){
        y = "K";
    }
    if (y == 12){
        y = "L";
    }
    if (y == 13){
        y = "M";
    }
    if (y == 14){
        y = "N";
    }
    if (y == 15){
        y = "O";
    }
    if (y == 16){
        y = "P";
    }
    if (y == 17){
        y = "Q";
    }
    if (y == 18){
        y = "R";
    }
    if (y == 19){
        y = "S";
    }
    if (y == 20){
        y = "T";
    }
    if (y == 21){
        y = "U";
    }
    if (y == 22){
        y = "V";
    }
    if (y == 23){
        y = "W";
    }
    if (y == 24){
        y = "X";
    }
    if (y == 25){
        y = "Y";
    }
    if (y == 26){
        y = "Z";
    }
    
    
}*/





