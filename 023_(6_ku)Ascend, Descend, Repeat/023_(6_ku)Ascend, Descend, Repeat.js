function ascendDescend(length, minimum, maximum) {
  let result = "";
  for (let i = minimum; i <= maximum; i++) {
    result += i;
  }
  for (let i = maximum - 1; i > minimum; i--) {
    result += i;
  }
  result = result.repeat(length);
  return result.substring(0, length);
}

console.log("length, minimum, maximum");
console.log(ascendDescend(40, 1, 9));
