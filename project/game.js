window.onhashchange = switchToStateFromURLHash;

let SPAState = {};

function switchToStateFromURLHash() {
  let URLHash = window.location.hash;

  let stateStr = URLHash.substring(1);

  if (stateStr != "") {
    let parts = stateStr.split("_");
    SPAState = { pagename: parts[0] };
    SPAState.id = parts[1];
  }
}

function switchToState(newState) {
  let stateStr = newState.pagename;
  stateStr += "_" + newState.id;
  location.hash = stateStr;
}

function switchToLevelPage(id) {
  switchToState({ pagename: "Level", id: id });
  if (id == 1) {
    console.log("1 lvl");
  } else {
    console.log("2 lvl");
  }
}

switchToStateFromURLHash();

const bodyColl = document.getElementsByTagName("body");
const body = bodyColl[0];

const wrapper = document.getElementById("page-wrapper");

const span = document.createElement("span");
span.textContent = "Memory Game";
wrapper.appendChild(span);

const game = document.createElement("div");
game.className = "game";
wrapper.appendChild(game);

const musicBtn = document.createElement("button");
musicBtn.className = "musicBtn";
musicBtn.textContent = "Music on";
wrapper.appendChild(musicBtn);
const myaudio = document.getElementById("myaudio");

musicBtn.addEventListener("click", () => {
  if (myaudio.paused == true) {
    myaudio.play();
    musicBtn.textContent = "Music off";
  } else if (myaudio.paused == false) {
    myaudio.pause();
    musicBtn.textContent = "Music on";
  }
});

const levelsDiv = document.createElement("div");
levelsDiv.className = "levels";
wrapper.appendChild(levelsDiv);

const reset = document.createElement("button");
reset.className = "button";
reset.textContent = "Reset Game";
wrapper.appendChild(reset);

body.appendChild(wrapper);

let levels = {
  1: { lvl: "Level_1", comment: "Level 1" },
  2: { lvl: "Level_2", comment: "Level 2" },
};

let levelStr = "";

for (let id in levels) {
  let lvl = levels[id];
  levelStr +=
    '<input type=button value="' +
    lvl.comment +
    '" onclick="switchToLevelPage(' +
    id +
    ')"> ';
}

document.querySelector(".levels").innerHTML = levelStr;

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

// let sortPictures = pictures.sort(() => (Math.random() > 0.5 ? 2 : -1));

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

reset.addEventListener("click", () => {
  window.location.reload();
});
