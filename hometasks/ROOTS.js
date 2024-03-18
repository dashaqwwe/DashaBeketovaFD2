function discriminant(a, b, c) {
  if (a == "0") (a = 1), alert("На ноль делить нельзя, заменяем на 1");
  const d = b * b - 4 * a * c;
  // if (a == "0") return [Infinity];
  if (d < 0) return [];
  if (d == 0) return [-b / (2 * a)];
  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);
  return [x1.toFixed(1), x2.toFixed(1)];
}

function ttt() {
  const a = parseInt(prompt("Введите a"));
  const b = parseInt(prompt("Введите b"));
  const c = parseInt(prompt("Введите c"));
  const roots = discriminant(a, b, c);

  if (!roots.length) alert("корней нет!");
  // else if (roots.includes(Infinity)) alert("На ноль делить нельзя");
  else if (roots.length == 1) alert("один корень: " + roots[0]);
  else alert("два корня: " + roots[0] + " и " + roots[1]);
}
