function year() {
  const year = parseInt(prompt("Введите год", 986));
  return alert(Math.ceil(year / 100) + ' век');
}
year();
