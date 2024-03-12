alert(
  palindromes(
    prompt(
      "Введите палиндром",
      "  Море, веру буди — ярок, скор я иду буревером.  "
    )
  )
);

function palindromes(v) {
  const cleanString =
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\s]/g;
  const text = v
    .toLowerCase()
    .replace(cleanString, "")
    .replace(/[ё]/g, "е")
    .replace(/[ъ]/g, "ь");
  let i = 0,
    count = text.length - 1;
  while (i < count) {
    if (text.charAt(i++) != text.charAt(count--)) return false;
  }
  return true;
}
