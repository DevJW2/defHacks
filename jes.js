var ECanvas = document.getElementById("templateCanvas");
var CTX = ECanvas.getContext("2d");


function myFunction(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 27) {  // 27 is the ESC key
        alert ("You pressed the Escape key!");
    }
}