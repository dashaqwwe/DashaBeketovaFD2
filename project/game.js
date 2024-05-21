const bodyColl = document.getElementsByTagName("body");
const body = bodyColl[0];

const container = document.createElement("div");
container.className = "container";

const span = document.createElement("span");
span.textContent = "Memory Game";
container.appendChild(span);

const game = document.createElement("div");
game.className = "game";
container.appendChild(game);

const reset = document.createElement("button");
reset.className = "reset";
reset.textContent = "Reset Game";
container.appendChild(reset);

body.appendChild(container);

const canvas = document.getElementById("canvas");



let ctx = canvas.getContext("2d");
ctx.fillRect(10, 10, 10, 90);
ctx.fillRect(10, 50, 90, 10);
ctx.fillRect(90, 10, 10, 90);
document.body.style.backgroundImage = `url(${canvas.toDataURL()}`;
