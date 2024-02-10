const name = prompt("Ваше имя?");
const name2 = prompt("Ваша фамилия?");
const name3 = prompt("Ваше отчество?");
const age = parseInt(prompt("Ваш возраст?"));
const gender = confirm("Ваш пол женский?");
const age2 = age * 365;
const future = age + 5;
let pol;
let old;

if (gender) {
  pol = "женский";
} else {
  pol = "мужской";
}
//через ?
//   gender ? (pol = "женский") : (pol = "мужской");

if (pol == "женский" && age >= 58) {
  old = "да";
} else if (pol == "женский" && age < 58) {
  old = "нет";
} else if (pol == "мужской" && age >= 63) {
  old = "да";
} else {
  old = "нет";
}
//через ?
//   pol == "женский" && Age >= 58
//     ? (old = "да")
//     : pol == "женский" && Age < 58
//     ? (old = "нет")
//     : pol == "мужской" && Age >= 63
//     ? (old = "да")
//     : (old = "нет");

const fullName = name + name2 + name3;

alert(
  `Ваше ФИО: ${fullName} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${age2} \n Через 5 лет вам будет: ${future} \n Ваш пол: ${pol} \n Вы на пенсии: ${old}`
);
