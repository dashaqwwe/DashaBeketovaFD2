// debugger
const name = promptName(prompt("Ваше имя?"));
const name2 = promptName(prompt("Ваша фамилия?"));
const name3 = promptName(prompt("Ваше отчество?"));

function promptName(word) {
  while (Number(word) || !Boolean(word)) {
    word = prompt("Вы ввели некорректные данные");
  }
  return word;
}
let age = promptAge(parseInt(prompt("Введите возраст", 18)));

function promptAge(age) {
  while (!Boolean(age) || age <= 0 || age >= 120)
    age = parseInt(prompt("Повторите попытку ввода возраста", 18));
  return parseInt(age);
}

const gender = confirm("Ваш пол женский?");

const age2 = age * 365;
const future = age + 5;
let pol;
let old;

gender ? (pol = "женский") : (pol = "мужской");

if (pol == "женский" && age >= 58) {
  old = "да";
} else if (pol == "женский" && age < 58) {
  old = "нет";
} else if (pol == "мужской" && age >= 63) {
  old = "да";
} else {
  old = "нет";
}

const fullName = name + ' ' + name2 + ' ' + name3;

alert(
  `Ваше ФИО: ${fullName} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${age2} \n Через 5 лет вам будет: ${future} \n Ваш пол: ${pol} \n Вы на пенсии: ${old}`
);
