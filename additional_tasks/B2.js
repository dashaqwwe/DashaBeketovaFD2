alert(rev(prompt("Введите строку")));
function rev(v) {
  let result = v.split("").reverse().join("");
  return result;
}
