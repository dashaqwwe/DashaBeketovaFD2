const word = prompt("Введите слово для подсчета гласных букв");
function calc(word) {
  let num = 0;
  const letters = [
    "А",
    "а",
    "И",
    "и",
    "О",
    "о",
    "У",
    "у",
    "Ы",
    "ы",
    "Э",
    "э",
    "Е",
    "е",
    "Ё",
    "ё",
    "Ю",
    "ю",
    "Я",
    "я",
  ];
  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i])) {
      num++;
    }
  }
  return alert(`В вашем слове ${word} ${num} гласных букв!`);
}
calc(word);
