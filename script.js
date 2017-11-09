document.getElementById("click").onclick = function () { niceClickFunction() }
function niceClickFunction() {
    document.getElementById("click").innerHTML = "Nice click!";
}

document.getElementById("boobs").onclick = function () { toOrangeFunction() }
function toOrangeFunction() {
    document.getElementById("boobs").style.color ="orange";
}

document.getElementById("inputField").onkeydown = function() {toRedFunction()};

function toRedFunction() {
    document.getElementById("inputField").style.backgroundColor = "red";
}

/* Events fired on the drag target */
document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
};

document.ondrag = function(event) {
    document.getElementById("message").innerHTML = "Hey put me down!!";
};

/* Events fired on the drop target */
document.ondragover = function(event) {
    event.preventDefault();
};

document.ondrop = function(event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("message").innerHTML = "Thanks that was scary.";
    }
};

