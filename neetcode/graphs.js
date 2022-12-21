// * #200. Number of Islands
// Time O(rc) Space O(rc) rc for row and col
var numIslands = function (grid) {
    // ! Recursive DFS
  const explore = (grid, currRow, currCol, visited) => {
    const rowInbounds = 0 <= currRow && currRow < grid.length;
    const colInbounds = 0 <= currCol && currCol < grid[0].length;
    if (!rowInbounds || !colInbounds || grid[currRow][currCol] === "0")
      return false;

    let pos = currRow + "," + currCol;
    if (visited.has(pos)) return false;
    visited.add(pos);
    explore(grid, currRow + 1, currCol, visited);
    explore(grid, currRow - 1, currCol, visited);
    explore(grid, currRow, currCol + 1, visited);
    explore(grid, currRow, currCol - 1, visited);

    return true;
  };

  let count = 0,
    visited = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited) === true) {
        count++;
      }
    }
  }
  return count;
};

// ! Neetcode solution
// var numIslands = function (grid, connectedComponents = 0) {
//   const [rows, cols] = [grid.length, grid[0].length];

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       const isIsland = grid[row][col] === "1";
//       if (isIsland) connectedComponents++;

//       dfs(grid, row, rows, col, cols); /* Space O(ROWS * COLS) */
//     }
//   }

//   return connectedComponents;
// };

// const dfs = (grid, row, rows, col, cols) => {
//   const isBaseCase = grid[row][col] === "0";
//   if (isBaseCase) return;

//   grid[row][col] = "0";

//   for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
//     dfs(grid, _row, rows, _col, cols); /* Space O(ROWS * COLS) */
//   }
// };

// var getNeighbors = (row, rows, col, cols) =>
//   [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ]
//     .map(([_row, _col]) => [row + _row, col + _col])
//     .filter(
//       ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols
//     );

// * #133 Clone Graph
// Time O(n) Space O(n)
var cloneGraph = function (node, seen = new Map()) {
  if (!node) return null;
  if (seen.has(node)) return seen.get(node);
  return dfs(node, seen);
};
// ! Recursive DFS
const dfs = (node, seen) => {
  const clone = new Node(node.val);

  seen.set(node, clone);

  for (const neighbor of node.neighbors) {
    const cloneNeighbor = cloneGraph(neighbor, seen);
    clone.neighbors.push(cloneNeighbor);
  }

  return clone;
};

