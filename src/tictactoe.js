const winning = [
  [[1,2],[3,6],[4,8]],
  [[0,2],[4,7]],
  [[0,1],[4,6],[5,8]],
  [[0,6],[4,5]],
  [[0,8],[1,7],[2,6],[3,5]],
  [[2,8],[3,4]],
  [[0,3],[2,4],[7,8]],
  [[1,4],[6,8]],
  [[0,4],[2,5],[6,7]],
];
export function didWin(board, lastMove, name) {
  const toCheck = winning[lastMove];
  for (let line of toCheck) {
    if (board[line[0]] === name && board[line[1]] === name) {
      // WIN!
      return true;
    }
  }
  return false;
}