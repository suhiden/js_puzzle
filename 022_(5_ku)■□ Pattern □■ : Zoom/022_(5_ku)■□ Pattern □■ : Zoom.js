function zoom(n) {
  let i = 1;
  let arr = ["■"];
  while (n > i) {
    i = i + 2;
    arr.unshift("□".repeat(i));
    arr.push("□".repeat(i));
    for (let k = 1; k < arr.length - 1; k++) {
      arr[k] = "□" + arr[k] + "□";
    }
    if (i == n) break;
    i = i + 2;
    arr.unshift("■".repeat(i));
    arr.push("■".repeat(i));
    for (let k = 1; k < arr.length - 1; k++) {
      arr[k] = "■" + arr[k] + "■";
    }
  }
  let result = "";
  for (let index = 0; index < arr.length; index++) {
    if (!index == 0) result = result + "\n";
    result = result + arr[index];
  }
  return result;
}

console.log(zoom(38));
