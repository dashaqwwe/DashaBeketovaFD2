"use strict";

let levels = {
  1: { lvl: "Level_1", comment: "Level 1" },
  2: { lvl: "Level_2", comment: "Level 2" },
  3: { lvl: "Level_3", comment: "Level 3" },
  4: { lvl: "Level_4", comment: "Level 4" },
  5: { lvl: "Level_5", comment: "Level 5" },
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

document.getElementById("levels").innerHTML = levelStr;

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

  let html = "";

  var lvl = levels[SPAState.id];
  html += "<div id='" + lvl.lvl + "'>";

  document.getElementById("div").innerHTML = html;
}

function switchToState(newState) {
  let stateStr = newState.pagename;
  stateStr += "_" + newState.id;
  location.hash = stateStr;
}

function switchToLevelPage(id) {
  switchToState({ pagename: "Level", id: id });
}

switchToStateFromURLHash();
