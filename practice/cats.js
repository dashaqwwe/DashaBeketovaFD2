const pets = [];
function getData() {
  const breed = document.getElementById("breed");
  const img = document.getElementById("img");
  const origin = document.getElementById("origin");
  const item = {
    breed: breed.value,
    // img: img.value,
    origin: origin.value,
  };
  pets.push(item);
  view();
}
// const cards = [
//   {
//     breed: "Британская короткошёрстная",
//     // img: ,
//     origin: "Великобритания",
//   },
//   {
//     breed: "Мейн-кун",
//     // img: ,
//     origin: "США",
//   },
//   {
//     breed: "Сиамская",
//     // img: ,
//     origin: "Афганистан",
//   },
//   {
//     breed: "Шотландская вислоухая",
//     // img: ,
//     origin: "Шотландия",
//   },
// ];

function view() {
  let wrap = document.getElementById("wrap");
  let elem = "";
  for (let i = 0; i < pets.length; i++) {
    elem += `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${pets[i].breed}</h5>
        <p class="card-text">${pets[i].origin}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
  }
  wrap.innerHTML = elem;
}
