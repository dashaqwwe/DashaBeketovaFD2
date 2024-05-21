const bodyColl = document.getElementsByTagName("body");
const body = bodyColl[0];

const wrapper = document.getElementById("page-wrapper");

const span = document.createElement("span");
span.textContent = "Memory Game";
wrapper.appendChild(span);

const game = document.createElement("div");
game.className = "game";
wrapper.appendChild(game);

const reset = document.createElement("button");
reset.className = "button";
reset.textContent = "Reset Game";
wrapper.appendChild(reset);

body.appendChild(wrapper);
