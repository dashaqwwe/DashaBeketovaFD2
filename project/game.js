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

let sortPictures = pictures.sort(() => (Math.random() > 0.5 ? 2 : -1));

window.onhashchange = switchToStateFromURLHash;

const wrapper = document.getElementById("page-wrapper");

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
      pageHTML += renderGameLevel1();
      break;
    case "2":
      pageHTML += renderLvlPage(2);
      break;
  }
  wrapper.innerHTML = pageHTML;

  if (spaState.pagename === "1") {
    attachGameLevel1Handlers();
  }
}

function attachGameLevel1Handlers() {
  document.querySelectorAll(".game .item").forEach((box) => {
    box.onclick = function () {
      box.classList.add("boxOpen");
      setTimeout(function () {
        if (document.querySelectorAll(".boxOpen").length - 1) {
          if (
            document.querySelectorAll(".boxOpen")[0]?.innerHTML ===
            document.querySelectorAll(".boxOpen")[1]?.innerHTML
          ) {
            document.querySelectorAll(".boxOpen")[0]?.classList.add("boxMatch");
            document.querySelectorAll(".boxOpen")[1]?.classList.add("boxMatch");
            document
              .querySelectorAll(".boxOpen")[1]
              ?.classList.remove("boxOpen");
            document
              .querySelectorAll(".boxOpen")[0]
              ?.classList.remove("boxOpen");
            if (
              document.querySelectorAll(".boxMatch").length === pictures.length
            ) {
              alert("win");
            }
          } else {
            document
              .querySelectorAll(".boxOpen")[1]
              ?.classList.remove("boxOpen");
            document
              .querySelectorAll(".boxOpen")[0]
              ?.classList.remove("boxOpen");
          }
        }
      }, 500);
    };
  });
}

function renderGameLevel1() {
  let div = document.createElement("div");
  div.classList.add("game");
  sortPictures.forEach((i) => {
    let img = document.createElement("img");
    let box = document.createElement("div");
    box.className = "item";
    img.setAttribute("src", i);
    img.draggable = false;
    box.appendChild(img);
    div.appendChild(box);
  });

  let game = div.outerHTML;
  return `${game} ${renderLvlPage(1)}`;
}

function attachGameLevel1Handlers() {
  const arr = [];
  const elements = document.querySelectorAll(".game .item");
  document.querySelectorAll(".game .item").forEach((box, i) => {
    box.onclick = function () {
      box.classList.add("boxOpen");
      arr.push(i);
      if (arr.length < 2) {
        console.log(elements[i]);
      }
      console.log(arr);
      if (document.querySelectorAll(".boxOpen").length === 2) {
        console.log("1");
        if (
          document.querySelectorAll(".boxOpen")[0]?.innerHTML ===
          document.querySelectorAll(".boxOpen")[1]?.innerHTML
        ) {
          console.log("2");
          document.querySelectorAll(".boxOpen")[0]?.classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1]?.classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1]?.classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0]?.classList.remove("boxOpen");
          if (
            document.querySelectorAll(".boxMatch").length === pictures.length
          ) {
            alert("win");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    };
  });
}

function renderGameLevel1() {
  let div = document.createElement("div");
  div.classList.add("game");
  sortPictures.forEach((i) => {
    let img = document.createElement("img");
    let box = document.createElement("div");
    box.className = "item";
    img.setAttribute("src", i);
    img.draggable = false;
    box.appendChild(img);
    div.style.width = `450px`;
    div.style.height = `450px`;
    div.appendChild(box);
  });

  let game = div.outerHTML;
  return `${game} ${renderLvlPage(1)}`;
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

function renderLvlPage(lvl) {
  if (lvl == 1) {
    return `
    <button onclick='resetPage()'>Reset</button>
    <button class='menuBtn' onclick='switchToGamePage()'>Back to levels</button>`;
  } else {
    return `
    <button onclick='resetPage()'>Reset</button>
    <button class='menuBtn' onclick='switchToGamePage()'>Back to levels</button>`;
  }
}

switchToStateFromURLHash();

// sortPictures.forEach((i) => {
//   let img = document.createElement("img");
//   let box = document.createElement("div");
//   box.className = "item";
//   img.setAttribute("src", i);
//   img.draggable = false;
//   box.appendChild(img);
//   game.appendChild(box);

//   box.addEventListener("click", () => {
//     box.classList.add("boxOpen");
//     setTimeout(function () {
//       try {
//         if (document.querySelectorAll(".boxOpen").length - 1) {
//           if (
//             document.querySelectorAll(".boxOpen")[0].innerHTML ==
//             document.querySelectorAll(".boxOpen")[1].innerHTML
//           ) {
//             document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
//             document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
//             document
//               .querySelectorAll(".boxOpen")[1]
//               .classList.remove("boxOpen");
//             document
//               .querySelectorAll(".boxOpen")[0]
//               .classList.remove("boxOpen");
//             if (
//               document.querySelectorAll(".boxMatch").length == pictures.length
//             ) {
//               alert("win");
//             }
//           } else {
//             document
//               .querySelectorAll(".boxOpen")[1]
//               .classList.remove("boxOpen");
//             document
//               .querySelectorAll(".boxOpen")[0]
//               .classList.remove("boxOpen");
//           }
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }, 500);
//   });
// });

function resetPage() {
  window.location.reload();
}

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
