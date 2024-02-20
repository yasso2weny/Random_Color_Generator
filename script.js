document.getElementById("txt-clr-btn").addEventListener("click", txtColorFunction);
function txtColorFunction() {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
document.getElementById("text").style.color =  "#" + randomColor;
}

document.getElementById("bg-clr-btn").addEventListener("click", bgClrFunction);
function bgClrFunction() {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
document.getElementById("main-container").style.backgroundColor =  "#" + randomColor;
}