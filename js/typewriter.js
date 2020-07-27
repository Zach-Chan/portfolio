//  code parts of code referenced from
//  https://stackoverflow.com/questions/52600390/javascript-iterate-array-of-strings-and-add-typing-deleting-effect-to-each-comp

var speed = 50; /* The speed/duration of the effect in milliseconds */
var speed2 = 80;
var pause = 1500;
var str = document.getElementById("typewriter-text");
var i = 0;
var deleting = false;

var textList = [
    'UX designer', 
    'web developer', 
    'problem-solver', 
    'team player'
];

console.log(textList);

function typeWriter() {
    if (deleting) {
        if (str.innerText.length > 0) {
            str.innerText = str.innerText.substr(0, str.innerHTML.length - 1);
            setTimeout(typeWriter, speed2);
            return;
        }
        setTimeout(function() {
            deleting = false;
        }, pause);
        i += 1;
        if (i >= textList.length) {
            i = 0;
        }
        setTimeout(typeWriter, speed);
        return;
    }
    var text = textList[i];
    str.innerText = text.substr(0, str.innerHTML.length + 1);
    if (str.innerText.length === text.length) {
        deleting = true;
    }
    setTimeout(typeWriter, deleting ? speed2 : speed);
}

setTimeout( typeWriter, speed );