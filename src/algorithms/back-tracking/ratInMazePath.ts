export default function ratInMazePath(
  maze: number[][],
  startRow = 0,
  startCol = 0,
  endRow = maze.length - 1,
  endCol = maze[0].length - 1
): number[][] {
  if (maze.length <= 0) {
    return maze;
  }

  let solution = [...maze];

  ratInMazePathImpl(solution, startRow, startCol, endRow, endCol);

  return solution;
}

function ratInMazePathImpl(
  solution: number[][],
  currentRow: number,
  currentCol: number,
  endRow: number,
  endCol: number
) {
  if (currentRow === endRow && currentCol === endCol) {
    solution[currentRow][currentCol] = 2;
    return true;
  }

  if (isValidCell(solution, currentRow, currentCol)) {
    //  assuming the current cell will give us a path
    // marking current cell as possible path
    solution[currentRow][currentCol] = 2;
    // moving right
    if (
      ratInMazePathImpl(solution, currentRow, currentCol + 1, endRow, endCol)
    ) {
      return true;
    }
    // moving down
    if (
      ratInMazePathImpl(solution, currentRow + 1, currentCol, endRow, endCol)
    ) {
      return true;
    }

    // revert to 0 if both directions don't give a path
    solution[currentRow][currentCol] = 0;
    // no path is possible in both directions
    return false;
  }

  return false;
}

function isValidCell(
  maze: number[][],
  currentRow: number,
  currentCol: number
): boolean {
  if (
    currentRow < 0 ||
    currentRow >= maze.length ||
    currentCol < 0 ||
    currentCol >= maze[0].length
  ) {
    return false;
  }

  if (maze[currentRow][currentCol] === 1) {
    return false;
  }

  return true;
}
