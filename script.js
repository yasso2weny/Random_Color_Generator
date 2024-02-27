const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Getting my elements
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// Adding a click event 
btn.addEventListener("click", function() {
    // Get random number between 0-3 (from the array)
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); // colors.length is 4
}
