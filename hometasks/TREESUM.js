const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
function treeSum(arr) {
  let sum = 0;
  for (let item of arr) {
    if (typeof item === "object") {
      sum += treeSum(item);
    } else if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
}
console.log(treeSum(arr));
