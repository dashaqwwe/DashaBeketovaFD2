let pictures = [
  "images/img-1.png",
  "images/img-1.png",
  "images/img-2.png",
  "images/img-2.png",
  "images/img-3.png",
  "images/img-3.png",
  "images/img-4.png",
  "images/img-4.png",
  "images/img-5.png",
  "images/img-5.png",
  "images/img-6.png",
  "images/img-6.png",
  "images/img-7.png",
  "images/img-7.png",
  "images/img-8.png",
  "images/img-8.png",
];

let picturesTwo = [
  "images/img-9.png",
  "images/img-9.png",
  "images/img-10.png",
  "images/img-10.png",
  "images/img-11.png",
  "images/img-11.png",
  "images/img-12.png",
  "images/img-12.png",
  "images/img-13.png",
  "images/img-13.png",
  "images/img-14.png",
  "images/img-14.png",
  "images/img-15.png",
  "images/img-15.png",
  "images/img-16.png",
  "images/img-16.png",
  "images/img-17.png",
  "images/img-17.png",
  "images/img-18.png",
  "images/img-18.png",
  "images/img-19.png",
  "images/img-19.png",
  "images/img-20.png",
  "images/img-20.png",
  "images/img-21.png",
  "images/img-21.png",
  "images/img-22.png",
  "images/img-22.png",
  "images/img-23.png",
  "images/img-23.png",
  "images/img-24.png",
  "images/img-24.png",
];

let sortPictures = pictures.sort(() => (Math.random() > 0.5 ? 2 : -1));

let sortPicturesTwo = picturesTwo.sort(() => (Math.random() > 0.5 ? 2 : -1));

const myaudio = document.getElementById("myaudio");
function switchSound() {
  const musicBtn = document.querySelector(".musicBtn");
  if (myaudio.paused == true) {
    myaudio.play();
    musicBtn.textContent = "Music off";
  } else if (myaudio.paused == false) {
    myaudio.pause();
    musicBtn.textContent = "Music on";
  }
}

const wrapper = document.getElementById("page-wrapper");

window.onhashchange = switchToStateFromURLHash;

let spaState = {};

function switchToStateFromURLHash() {
  const URLHash = window.location.hash;
  const stateStr = URLHash.substring(1);

  if (stateStr !== "") {
    let parts = stateStr.split("_");
    spaState = { pagename: parts[0] };
  } else spaState = { pagename: "Main" };

  let pageHTML = "";

  switch (spaState.pagename) {
    case "Settings":
      pageHTML += renderSettingPage();
      break;
    case "Main":
      pageHTML += renderMainPage();
      break;
    case "Game":
      pageHTML += renderGamePage();
      break;
    case "1":
      pageHTML += renderGameLevel(1);
      break;
    case "2":
      pageHTML += renderGameLevel(2);
      break;
  }

  wrapper.innerHTML = pageHTML;
  if (spaState.pagename == 1) {
    attachGameLevel1Handlers(1);
  } else attachGameLevel1Handlers(2);
}

let openCards = [];

function checkForMatch(lvl) {
  const [firstCard, secondCard] = openCards;

  if (firstCard.innerHTML === secondCard.innerHTML) {
    firstCard.classList.add("boxMatch");
    secondCard.classList.add("boxMatch");
    firstCard.classList.remove("boxOpen");
    secondCard.classList.remove("boxOpen");
  }

  if (lvl == 1) {
    if (document.querySelectorAll(".boxMatch").length === pictures.length) {
      setTimeout(() => {
        alert("win");
      }, 500);
    } else {
      setTimeout(() => {
        firstCard.classList.remove("boxOpen");
        secondCard.classList.remove("boxOpen");
      }, 500);
    }
  } else {
    if (document.querySelectorAll(".boxMatch").length === picturesTwo.length) {
      setTimeout(() => {
        alert("win");
      }, 500);
    } else {
      setTimeout(() => {
        firstCard.classList.remove("boxOpen");
        secondCard.classList.remove("boxOpen");
      }, 500);
    }
  }

  openCards = [];
}

function attachGameLevel1Handlers(lvl) {
  document.querySelectorAll(".game .item").forEach((box) => {
    box.onclick = function () {
      if (
        openCards.length < 2 &&
        !box.classList.contains("boxOpen") &&
        !box.classList.contains("boxMatch")
      ) {
        box.classList.add("boxOpen");
        openCards.push(box);

        if (openCards.length === 2) {
          if (lvl == 1) {
            checkForMatch(1);
          } else checkForMatch(2);
        }
      }
    };
  });
}

function renderGameLevel(lvl) {
  let div = document.createElement("div");
  div.classList.add("game");

  if (lvl == 1) {
    sortPictures.forEach((i) => {
      let img = document.createElement("img");
      let box = document.createElement("div");
      box.className = "item";
      img.setAttribute("src", i);
      img.draggable = false;
      box.appendChild(img);
      div.style.width = `430px`;
      div.style.height = `430px`;
      div.appendChild(box);
    });
  } else {
    sortPicturesTwo.forEach((i) => {
      let img = document.createElement("img");
      let box = document.createElement("div");
      box.className = "item";
      img.setAttribute("src", i);
      img.draggable = false;
      box.appendChild(img);
      div.style.width = `870px`;
      div.style.height = `430px`;
      div.appendChild(box);
    });
  }

  let game = div.outerHTML;

  return `${game} ${renderLvlPage()}`;
}

function switchToState(newState) {
  const stateStr = newState.pagename;
  location.hash = stateStr;
}

function switchToMainPage() {
  switchToState({ pagename: "Main" });
}

function renderMainPage() {
  return ` <span>Memory Game</span>
  <button onclick='switchToGamePage()'>Start Game</button>
  <button class='settings' onclick='switchToSettingsPage()'>Settings</button>`;
}

function switchToGamePage() {
  switchToState({ pagename: "Game" });
}

function renderGamePage() {
  let levels = {
    1: { lvl: "Level_1", comment: "Level 1" },
    2: { lvl: "Level_2", comment: "Level 2" },
  };
  let levelStr = "";
  let spanStr = `<span>Memory Game</span>`;
  let backStr = `<button class='menuBtn' onclick='switchToMainPage()'>Back to menu</button>`;
  for (let id in levels) {
    let lvl = levels[id];
    levelStr += `<button onclick='switchToLevelPage(${id})'>${lvl.comment}</button>`;
  }
  return `${spanStr + levelStr + backStr}`;
}

function switchToSettingsPage() {
  switchToState({ pagename: "Settings" });
}

function renderSettingPage() {
  return `<span>Memory Game</span>
  <button class='musicBtn' onclick='switchSound()'>Music on</button>
  <button class='menuBtn' onclick='switchToMainPage()'>Back to menu</button>`;
}

function switchToLevelPage(lvl) {
  switchToState({ pagename: lvl });
}

function renderLvlPage() {
  return `
    <button onclick='resetPage()'>Reset</button>
    <button class='menuBtn' onclick='switchToGamePage()'>Back to levels</button>`;
}

switchToStateFromURLHash();

function resetPage() {
  window.location.reload();
}
