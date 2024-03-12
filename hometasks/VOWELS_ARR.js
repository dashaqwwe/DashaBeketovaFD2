// ФУНКЦИЯ filter

function grab1(str) {
  const arr = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
  const string = str.toLowerCase().split("");
  result = string.filter((v) => arr.includes(v));
  return console.log(result.length);
}

// ФУНКЦИЯ forEach

function grab2(str) {
  const arr = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
  let summ = 0;
  const string = str.toLowerCase().split("");
  string.forEach((v) => {
    if (arr.includes(v)) {
      summ += 1;
    }
  });
  return console.log(summ);
}

// ФУНКЦИЯ reduce

function ret() {
  const word = prompt("Введите слово для подсчета гласных букв");
  function grab3(str) {
    const arr = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
    const string = str.toLowerCase().split("");
    return string.reduce((r, v) => {
      if (arr.includes(v)) {
        r += 1;
      }
      return r;
    }, 0);
  }
  console.log(grab3(word));
}
