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

sortPictures.forEach((i) => {
  let img = document.createElement("img");
  let box = document.createElement("div");
  box.className = "item";
  img.setAttribute("src", i);
  img.draggable = false;
  box.appendChild(img);
  game.appendChild(box);

  box.addEventListener("click", () => {
    box.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length - 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
          if (
            document.querySelectorAll(".boxMatch").length == pictures.length
          ) {
            alert("win");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  });
});

reset.addEventListener("click", () => {
  window.location.reload();
});
