const el = document.getElementById("app");
const up = document.getElementById("up");
const down = document.getElementById("down");
const filter = document.getElementById("filter");

let animals = [
  {
    id: "07351738510839678",
    animal: "Кошка",
    breed: "Британская короткошёрстная",
    imgUrl: "img/756789646391462.webp",
    price: "800",
    descr: "Продается кошка",
  },
  {
    id: "07351738510839679",
    animal: "Кот",
    breed: "Мейн-кун",
    imgUrl: "img/3881_15453859311241.jpg",
    price: "800",
    descr: "Продается кот",
  },
  {
    id: "07351738510839676",
    animal: "Котёнок",
    breed: "Рэгдолл",
    imgUrl: "img/bd93de754802cefbd87bf5c2b549daeb.jpg",
    price: "1200",
    descr: "Продается котёнок мальчик",
  },
  {
    id: "07351738510839678",
    animal: "Щенок",
    breed: "Сибирский хаски",
    imgUrl: "img/Siberian-Husky-Puppy-Photo_002.jpg",
    price: "1000",
    descr: "Продается щенок мальчик",
  },
  {
    id: "07351738510839679",
    animal: "Кошка",
    breed: "Персидская",
    imgUrl: "img/veter75.webp",
    price: "900",
    descr: "Продается кошка",
  },
  {
    id: "07351738510839676",
    animal: "Котёнок",
    breed: "Британская золотая шиншилла",
    imgUrl:
      "img/small-cute-kitten-golden-chinchilla-british-white-background_106368-561.avif",
    price: "1600",
    descr: "Продается котёнок девочка",
  },
];

function getData() {
  const animal = document.getElementById("animal");
  const breed = document.getElementById("breed");
  const imgUrl = document.getElementById("imgUrl");
  const price = document.getElementById("price");
  const descr = document.getElementById("descr");

  const item = {
    id: Math.random().toString().split(".")[1],
    brand: animal.value,
    model: breed.value,
    imgUrl: imgUrl.value,
    price: price.value,
    descr: descr.value,
  };
  animals.push(item);
  view(animals);
}

function view(data) {
  const card = document.querySelectorAll(".card");
  const app = document.querySelector("#app");
  if (card.length > 0) {
    app.innerHTML = "";
  }

  for (let i = 0; i < data.length; i++) {
    createCard(
      data[i].imgUrl,
      data[i].animal,
      data[i].breed,
      data[i].price,
      data[i].descr,
      data[i].id
    );
  }
}

const deleteCard = (e) => {
  const { id } = e.currentTarget.dataset;
  const filteredCard = animals.filter((animal) => animal.id !== id);
  animals = [...filteredCard];
  view(animals);
};

const createCard = (...data) => {
  const [imgUrl, animal, breed, price, descr, id] = data;

  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  divCard.setAttribute("data-id", id);
  divCard.addEventListener("click", deleteCard);

  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  img.setAttribute("class", "card-img-top");

  const divBody = document.createElement("div");
  divBody.setAttribute("class", "card-body");

  const h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title");
  const h5Text = document.createTextNode(`${animal}`);
  h5.appendChild(h5Text);

  const h6 = document.createElement("h6");
  h6.setAttribute("class", "card-title");
  const h6Text = document.createTextNode(`${breed}`);
  h6.appendChild(h6Text);

  const p = document.createElement("p");
  p.setAttribute("class", "card-text");
  const pText = document.createTextNode(`${descr}`);
  p.appendChild(pText);

  const priceP = document.createElement("p");
  priceP.setAttribute("class", "card-text");
  const priceText = document.createTextNode(`${price}`);
  priceP.appendChild(priceText);

  const a = document.createElement("a");
  const aText = document.createTextNode("Delete");
  a.setAttribute("class", "btn btn-primary");
  a.appendChild(aText);

  divCard.appendChild(img);
  divBody.appendChild(h5);
  divBody.appendChild(h6);
  divBody.appendChild(p);
  divBody.appendChild(priceP);
  divBody.appendChild(a);
  divCard.appendChild(divBody);
  el.appendChild(divCard);
};

view(animals);

up.addEventListener("click", () => {
  animals.sort((a, b) => a.price - b.price);

  view(animals);
});

down.addEventListener("click", () => {
  animals.sort((a, b) => b.price - a.price);

  view(animals);
});

filter.addEventListener("input", (e) => {
  const value = e.target.value;
  const filteredCard = animals.filter((animal) =>
    animal.breed.startsWith(value)
  );
  view(filteredCard);
});

function local() {
  const animal = document.getElementById("animal").value;
  const breed = document.getElementById("breed").value;
  const imgUrl = document.getElementById("imgUrl").value;
  const price = document.getElementById("price").value;
  const descr = document.getElementById("descr").value;
  const animals = JSON.parse(localStorage.getItem("users")) || [];
  animals.push({
    animal,
    breed,
    imgUrl,
    price,
    descr,
  });
  localStorage.setItem("animals", JSON.stringify(animals));
  console.log(animals);
}
