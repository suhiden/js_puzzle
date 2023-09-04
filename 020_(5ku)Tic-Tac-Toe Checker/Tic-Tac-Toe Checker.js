function isSolved(board) {
  // TODO: Check if the board is solved!
  // проверка массива на валидность правилам доски
  if (!checkValidMas(board)) return "Ошибка в массиве...";
  //+++++++++
  // result equil on of:
  //   -1 if the board is not yet finished AND no one has won yet (there are empty spots),
  //   1 if "X" won,
  //   2 if "O" won,
  //   0 if it's a cat's game (i.e. a draw).
  let result = -1;
  let wonO = 0;
  let wonX = 0;
  let gameContinue = 0;
  let boardLengt = board.length;

  //   let row = 0;
  //   let col = 0;
  //   let diagonal = 0;

  //   пробегаем по всем элементам перебирая масив.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const element = board[i][j];
      let row = 0;
      let col = 0;
      let diagonal = 0;
      // проверка на незавершенность игры
      if (element == 0) gameContinue++;
      //console.log(element, i, j, board[i][j]);
      if (element == 1 || element == 2) {
        //   перебираем строку только если есть 1 или 2
        for (let r = 0; r < board[i].length; r++) {
          if (board[i][r] == element) {
            row++;
            //console.log(k, board[k], "row = ", row);
          }
        }
        //   перебираем колонку
        for (k of board) {
          if (k[j] == element) {
            col++;
          }
        }
        // перебираем диагонали
        for (let k = 0; k < board.length; k++) {
          for (let kk = 0; kk < board[k].length; kk++)
            if (k == kk && board[k][kk] == element) {
              diagonal++;
            }
        }
      }
      //   console.log(row, col, element);
      // определяем кто победил

      if (
        (col == boardLengt && element == 1) ||
        (row == boardLengt && element == 1) ||
        (diagonal == boardLengt && element == 1)
      ) {
        wonX++;
      }
      if (
        (col == boardLengt && element == 2) ||
        (row == boardLengt && element == 2) ||
        (diagonal == boardLengt && element == 2)
      ) {
        wonO++;
      }
      if (wonO == wonX) result = 0;
      if (wonO > wonX) result = 2;
      if (wonO < wonX) result = 1;
      console.log(col, row, diagonal, gameContinue);
    }
  }
  if (gameContinue > 0 && !(wonO > 0 || wonX > 0)) result = -1;
  return result;
}

function checkValidMas(arr) {
  let arr2 = [];
  let result = true;
  for (let arg of arr) {
    arr2.push(...arg);
  }
  for (element of arr2) {
    if (element != 0 && element != 1 && element != 2) {
      result = false;
    }
  }
  return result;
}

mas = [
  [1, 1, 1, 1, 2],
  [2, 1, 2, 2, 2],
  [1, 2, 2, 0, 1],
  [1, 2, 2, 1, 1],
  [2, 2, 2, 1, 1],
];
console.log(isSolved(mas));
