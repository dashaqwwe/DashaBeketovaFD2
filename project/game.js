const bodyColl = document.getElementsByTagName("body");
const body = bodyColl[0]

const container = document.createElement("div");
container.className = 'container'

const span = document.createElement('span')
span.textContent = 'Memory Game'
container.appendChild(span)

const game = document.createElement('div')
game.className = 'game'
container.appendChild(game)

const reset = document.createElement('button')
reset.className = 'reset'
reset.textContent = 'Reset Game'
container.appendChild(reset)

body.appendChild(container)

