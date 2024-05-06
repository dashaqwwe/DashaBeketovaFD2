"use strict";
class LocalStorageClass {
  constructor(key) {
    this.result = "";
    this.newKey = key;

    if (!localStorage[this.newKey]) {
      this.storage = {};
    } else this.storage = JSON.parse(localStorage[this.newKey]);
  }

  addValue(key, value) {
    this.storage[key] = value;
    localStorage[this.newKey] = JSON.stringify(this.storage);
  }
  getValue(key) {
    if (key in this.storage) {
      return this.storage[key];
    } else return false;
  }
  deleteValue(key) {
    if (key in this.storage) {
      delete this.storage[key];
      localStorage[this.newKey] = JSON.stringify(this.storage);
      return true;
    } else return false;
  }
  getKeys() {
    for (let key in this.storage) this.result += key;
    return this.result;
  }
}

const drinkStorage = new LocalStorageClass("drinks");

function add() {
  const _key = prompt("Введите название напитка");
  const _value = prompt("Введите рецепт напитка");
  let alc = confirm("Напиток алкогольный?");
  if (alc == true) alc = "алкогольный";
  else alc = "безалкогольный";
  drinkStorage.addValue(_key, { _alc: alc, rec: _value });
  alert(`Напиток ${_key} успешно добавлен`);
}
function get() {
  const _key = prompt(
    "Введите название напитка для получения информации о нем"
  );
  const drinkH = drinkStorage.getValue(_key);
  if (drinkStorage.getValue(_key) == false) alert("Нет информации о напитке");
  else
    alert(
      `Напиток: ${_key},\nалкогольный ли: ${drinkH._alc},\nрецепт: ${drinkH.rec}`
    );
}
function del() {
  const _key = prompt("Введите напиток для удаления");
  if (drinkStorage.deleteValue(_key) == true) alert("Напиток успешно удален");
  else alert("Нет информации о напитке");
}
function listDrinks() {
  const arr = drinkStorage.getKeys();
  if (arr.length == 0) alert("Нет ни одного напитка");
  else alert(`${arr}`);
}

const dishStorage = new LocalStorageClass('dish');

function addDish() {
  const _key = prompt("Введите название блюда");
  const _value = prompt("Введите рецепт блюда");
  let desert = confirm("Это десерт?");
  if (desert == true) desert = "десерт";
  else desert = "основное блюдо";
  dishStorage.addValue(_key, { _desert: desert, rec: _value });
  alert(`Напиток ${_key} успешно добавлен`);
}
function getDish() {
  const _key = prompt("Введите название блюда для получения информации о нем");
  const dishH = dishStorage.getValue(_key);
  if (dishStorage.getValue(_key) == false) alert("Нет информации о блюде");
  else
    alert(
      `Блюдо: ${_key},\nдесерт ли: ${dishH._desert},\nрецепт: ${dishH.rec}`
    );
}
function delDish() {
  const _key = prompt("Введите блюдо для удаления");
  if (dishStorage.deleteValue(_key) == true) alert("Блюдо успешно удалено");
  else alert("Нет информации о блюде");
}
function listDish() {
  const arr = dishStorage.getKeys();
  if (arr.length == 0) alert("Нет ни одного блюда");
  else alert(`${arr}`);
}
