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

// * #417 Pacific Atlantic Waterflow
var pacificAtlantic = function (heights) {
  const [pacificReachable, atlanticReachable] = search(heights);

  return searchGrid(heights, pacificReachable, atlanticReachable);
};

const search = (heights) => {
  const [rows, cols] = [heights.length, heights[0].length];
  const [pacificReachable, atlanticReachable] = [
    getMatrix(rows, cols),
    getMatrix(rows, cols),
  ];

  searchRows(heights, rows, cols, pacificReachable, atlanticReachable);
  searchCols(heights, rows, cols, pacificReachable, atlanticReachable);

  return [pacificReachable, atlanticReachable];
};

const searchRows = (
  heights,
  rows,
  cols,
  pacificReachable,
  atlanticReachable
) => {
  for (let row = 0; row < rows; row++) {
    const [pacificStart, atlanticStart] = [0, cols - 1];

    dfs(row, pacificStart, rows, cols, pacificReachable, heights);
    dfs(row, atlanticStart, rows, cols, atlanticReachable, heights);
  }
};

var searchCols = (heights, rows, cols, pacificReachable, atlanticReachable) => {
  for (let col = 0; col < cols; col++) {
    const [pacificStart, atlanticStart] = [0, rows - 1];

    dfs(pacificStart, col, rows, cols, pacificReachable, heights);
    dfs(atlanticStart, col, rows, cols, atlanticReachable, heights);
  }
};

const searchGrid = (
  heights,
  pacificReachable,
  atlanticReachable,
  intersection = []
) => {
  const [rows, cols] = [heights.length, heights[0].length];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isReachable =
        pacificReachable[row][col] && atlanticReachable[row][col];
      if (!isReachable) continue;

      intersection.push([row, col]);
    }
  }
  return intersection;
};

const dfs = (row, col, rows, cols, isReachable, heights) => {
  isReachable[row][col] = true;

  for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
    if (isReachable[_row][_col]) continue;
    const isLower = heights[_row][_col] < heights[row][col];
    if (isLower) continue;

    dfs(_row, _col, rows, cols, isReachable, heights);
  }
};

var getNeighbors = (row, rows, col, cols) =>
  [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col])
    .filter(
      ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols
    );

const getMatrix = (rows, cols) =>
  new Array(rows).fill().map(() => new Array(cols).fill(false));

  const createGraph = (numCourses, edges) => {
    const graph = Array.from({ length: numCourses }, () => []);

    for (let edge of edges) {
      let [a, b] = edge;

      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
    }

    return graph;
  };

  // * Course Schedule can finish neetcode
  var canFinish = function (numCourses, prerequisites) {
    const graph = createGraph(numCourses, prerequisites);
    let [seen, seeing] = [new Set(), new Set()];

    function explore(course) {
      if (seen.has(course)) return true;
      if (seeing.has(course)) return false;

      seeing.add(course);
      for (let neighbor of graph[course]) {
        if (!explore(neighbor)) return false;
      }

      seen.add(course);
      seeing.delete(course);
      return true;
    }

    for (let i = 0; i < numCourses; i++) {
      if (!explore(i)) return false;
    }
    return true;
  };