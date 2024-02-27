const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex colors consist of '#''A-F''0-9''0-9''0-9''0-9''0-9'

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = '#';
    // loop will run 6 times
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; // += because we dont want to overwrite hexColor
        
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
