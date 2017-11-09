document.getElementById("click").onclick = function () { testFunction() }
function testFunction() {
    document.getElementById("click").innerHTML = "Nice click!";
}

document.getElementById("boobs").onclick = function () { myFunction() }
function myFunction() {
    document.getElementById("boobs").style.color ="green";
    
}