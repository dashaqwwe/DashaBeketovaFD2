function discriminant(a, b, c) {
  const d = b * b - 4 * a * c;
  if (a == "0" || b == "0" || c == "0") return [Infinity];
  if (d < 0) return [];
  if (d == 0) return [-b / (2 * a)];
  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);
  return [x1, x2];
}

function ttt() {
  const a = parseInt(prompt("Введите a"));
  const b = parseInt(prompt("Введите b"));
  const c = parseInt(prompt("Введите c"));
  const roots = discriminant(a, b, c);

  if (!roots.length) alert("корней нет!");
  else if (roots.includes(Infinity)) alert("На ноль делить нельзя");
  else if (roots.length == 1) alert("один корень: " + roots[0]);
  else alert("два корня: " + roots[0] + " и " + roots[1]);
}

function discriminantTest() {
  {
    console.log("тест 1,1,1");
    const roots = discriminant(1, 1, 1);
    console.log(roots.length == 0 ? "пройден" : "НЕ ПРОЙДЕН!");
  }

  {
    console.log("тест 1,-2,-3");
    const roots = discriminant(1, -2, -3);
    console.log(
      roots.length == 2 && roots[0] == 3 && roots[1] == -1
        ? "пройден"
        : "НЕ ПРОЙДЕН!"
    );
  }

  {
    console.log("тест -1,-2,15");
    const roots = discriminant(-1, -2, 15);
    console.log(
      roots.length == 2 && roots[0] == -5 && roots[1] == 3
        ? "пройден"
        : "НЕ ПРОЙДЕН!"
    );
  }

  {
    console.log("тест 1,12,36");
    const roots = discriminant(1, 12, 36);
    console.log(
      roots.length == 1 && roots[0] == -6 ? "пройден" : "НЕ ПРОЙДЕН!"
    );
  }

  {
    console.log("тест 0,5,-10");
    const roots = discriminant(0, 5, -10);
    console.log(
      "Здесь невозможно пройти тест. D = b2 – 4ac = 52 – 4·0·(-10) = 25. Дискриминант D > 0, следовательно уравнение имеет два действительных корня. Но делить на 0 нельзя. Получается Infinity и -Infinity"
    );
  }
}
