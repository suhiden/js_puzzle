function landPerimeter(arr) {
  let result = 0;
  arr.unshift("O".repeat(arr[0].length + 2));
  arr.push("O".repeat(arr[0].length + 2));
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = "O" + arr[i] + "O";
  }
  for (let r = 1; r < arr.length - 1; r++) {
    for (let c = 1; c < arr[r].length - 1; c++) {
      const element = arr[r][c];
      if (arr[r][c] == "X") {
        blockPerimeter = 4;
        if (arr[r + 1][c] == "X") blockPerimeter--;
        if (arr[r - 1][c] == "X") blockPerimeter--;
        if (arr[r][c + 1] == "X") blockPerimeter--;
        if (arr[r][c - 1] == "X") blockPerimeter--;
      }
      result += blockPerimeter;
      blockPerimeter = 0;
    }
  }
  return "Total land perimeter: " + result;
}

arr = ["XOOO", "XOXO", "XOXO", "OOXX", "OOOO"];
console.log(landPerimeter(arr));
