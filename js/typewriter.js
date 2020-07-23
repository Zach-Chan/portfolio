// console.log("typewriter js loaded");
var speed = 50; /* The speed/duration of the effect in milliseconds */
var speed2 = 100;
var pause = 2000;
var str = document.getElementById("typewriter-text");
var i = 0;
var deleting = true;

var textList = [
    'UX designer', 
    'web developer', 
    'problem-solver', 
    'team player'
];

console.log(textList);

function typeWriter() {
    // console.log("running typewriter manager");
    if (deleting) {
        if (str.innerText.length > 0) {
            str.innerText = str.innerText.substr(0, str.innerHTML.length - 1);
            setTimeout(typeWriter, speed2);
            return;
        }
        setTimeout(function() {
            deleting = false;
        }, pause);
        i++;
        if (i >= textList.length) {
            i = 0;
        }
        setTimeout(typeWriter, speed);
        return;
    }
    console.log("typing");
    var text = textList[i];
    str.innerText = text.substr(0, str.innerHTML.length + 1);
    if (str.innerText.length === text.length) {
        deleting = true;
    }
    setTimeout(typeWriter, deleting ? speed2 : speed);
}

setTimeout( typeWriter, speed );