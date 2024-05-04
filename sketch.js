const canvas = document.getElementById('etch-a-sketch-canvas');
const ctx = canvas.getContext('2d');

var animalImage=document.querySelector(".animal-img")
var submitButton=document.querySelector('.submit-button')
var myInstruction=document.querySelector('.draw-instruction')

var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modalTitle');
var modalContent = document.getElementById('modalContent');
var modalClose = document.getElementById('modalClose');


let penSize = 5;
let penColor = "black";
let penX = canvas.width / 2;
let penY = canvas.height / 2;
let penDirection = 0;


const creaturesList=[    "Sea Turtle",
"Salmon",
"Manatee",
"Whale Shark",
"Coral",
"Platypus",
"Dolphin",
"Penguin",
"Seahorse",
"Jellyfish",
"Axolotl",
"Oyster"];

var creatureMessages = [
    `Help me find my way back home! Protect nesting sites and reduce plastic pollution to ensure our survival.
     Help me go home safe! Protect nests and stop plastic waste, we need clean space!`,`Clean waters mean healthy habitats! Reduce pollution and support sustainable fishing practices to safeguard our spawning grounds.
     Clean water keeps us healthy! Stop pollution and fish responsibly to protect our homes!`,`Keep our waters clear and safe! Prevent pollution and protect our habitats to ensure a future for gentle giants like me.
     Keep water clean and safe! Stop pollution, protect homes, and save gentle giants like me!`,`Swim with care! Avoid plastic pollution and support ocean conservation efforts to protect majestic creatures like me.
     Be careful in the sea! Say no to plastic, help save ocean creatures like me!`,`Help me fight coral bleaching! Reduce carbon emissions and pollution to preserve vibrant coral reefs for generations to come.
     Save our coral reefs! Use less fuel, reduce pollution, and keep reefs colorful and cool!`,`Keep our streams clean and clear! Protect freshwater habitats and reduce pollution to save unique species like me.
     Keep streams crystal clear! Protect homes and stop pollution, save unique species like me!`,`Clean waters mean healthy oceans! Prevent pollution and support marine conservation to ensure our survival and well-being.
     Healthy oceans need clean water! Stop pollution, help marine life, and ensure our survival!`,`Protect our icy homes! Combat climate change and reduce plastic pollution to secure a future for penguins and their habitats.
     Save our icy homes! Fight climate change, use less plastic, and secure a future for penguins!`,`Keep our seas pristine! Prevent pollution and habitat destruction to safeguard delicate ecosystems and species like me.
     Protect our oceans' beauty! Stop pollution, save habitats, and safeguard delicate species like me!`,`Balance our oceans! Reduce pollution and overfishing to prevent harmful algal blooms and maintain healthy marine ecosystems.
     Keep oceans in balance! Stop pollution, fish wisely, and protect marine life and ecosystems!`,`Save our shrinking habitat! Protect freshwater habitats and prevent pollution to ensure the survival of unique amphibians like me
     Save our homes from shrinking! Protect freshwater homes, stop pollution, and save unique amphibians like me!`,`Filtering for a cleaner future! Reduce pollution and support restoration efforts to protect oyster reefs and improve water quality.
     Filtering for a better world! Stop pollution, help clean the water, and save oyster reefs!`
];


var images=["sea_turtle.png",
"salmon.png",
"manatee.png",
"whale_shark.png",
"coral.png",
"platypus.png",
"dolphin.png",
"penguin.png",
"seahorse.png",
"jellyfish.png",
"axolotl.png",
"oyster.png"];

var randomNumber = Math.random();
var randomIndex = Math.floor(randomNumber * 12);
var instruction=`Draw a ${creaturesList[randomIndex]}`
myInstruction.innerHTML=instruction;

animalImage.src=images[randomIndex];


function drawLine() {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
    ctx.beginPath();
    ctx.moveTo(penX, penY);
    penX += Math.cos(penDirection) * penSize;
    penY += Math.sin(penDirection) * penSize;
    ctx.lineTo(penX, penY);
    ctx.stroke();
}

function increasePenSize() {
    penSize += 5;
}

function decreasePenSize() {
    if (penSize > 5) {
        penSize -= 5;
    }
}

function drawCircle() {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
    ctx.beginPath();
    ctx.arc(penX, penY, penSize / 2, 0, Math.PI * 2);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    penX = canvas.width / 2;
    penY = canvas.height / 2;
}

function changeColor() {
    const colors = ["black", "white", "red", "blue", "green", "yellow", "orange"];
    penColor = colors[Math.floor(Math.random() * colors.length)];
}

function changeDirection(angle) {
    penDirection += (angle * Math.PI) / 180;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        drawLine();
    } else if (event.key === 'a') {
        changeDirection(-10);
    } else if (event.key === 'd') {
        changeDirection(10);
    } else if (event.key === 'c') {
        clearCanvas();
    } else if (event.key === 'f') {
        drawCircle();
    } else if (event.key === ' ') {
        changeColor();
    } else if (event.key === 'k') {
        increasePenSize();
    } else if (event.key === 'o') {
        decreasePenSize();
    }
}); 

submitButton.addEventListener("click", function() {

    modalTitle.textContent = "Help Protect Aquatic Life!";
    modalContent.textContent = `${creatureMessages[randomIndex]}`;


    modal.style.display = "block";
});

modalClose.onclick = function() {
    modal.style.display = "none";
  }