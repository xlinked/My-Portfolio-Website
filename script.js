//Hamburger
var hamburger = document.querySelector(".hamburger-menu")
var navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("change");
});
//END Hamburger

// JS Smooth Scroll 
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});
//End of smooth scroll

//Type writter text effect.
const text = ['FULL STACK - DEVELOPER   '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if(count === text.length) {
    count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("full-stack").textContent = letter;
if(letter.length === currentText.length) {
    count++;
    index = 0;
}
setTimeout(type, 400);
}());
//End of type writter text effect.

//Page visit Count API
function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
};