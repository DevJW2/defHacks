var ECanvas = document.getElementById("templateCanvas");
var CTX = ECanvas.getContext("2d");


function myFunction(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 27) {  // 27 is the ESC key
        alert ("You pressed the Escape key!");
    }
}

var pane = $('#templateCanvas'),
    box = $('#box'),
    w = pane.width() - box.width(),
    d = {},
    x = 3;

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20);


