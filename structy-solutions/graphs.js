// * Has Path Iterative DFS
// Time O(n) Space O(n)
const hasPath = (graph, src, dst) => {
  // todo
  let [seen, stack] = [new Set(), [src]];

  while (stack.length) {
    let curr = stack.pop();
    if (seen.has(curr)) continue;
    if (curr === dst) return true;
    seen.add(curr);
    stack.push(...graph[curr]);
  }

  return false;
};

// Has Path BFS
// const hasPath = (graph, src, dst) => {
//   const queue = [src];

//   while (queue.length) {
//     const current = queue.shift();
//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }

//   return false;
// };

// ! Recursive Has Path
// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) {
//       return true;
//     }
//   }

//   return false;
// };

// * Undirected Path
// Time O(n) Space O(n)
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createAdj(edges);

  let [stack, seen] = [[nodeA], new Set()];

  while (stack.length) {
    let curr = stack.pop();
    if (seen.has(curr)) continue;
    if (curr === nodeB) return true;
    seen.add(curr);
    stack.push(...graph[curr]);
  }

  return false;
};
// Time O(n) Space O(n)
const createAdj = (edges) => {
  const graph = {};

  for (const edge of edges) {
    let [e1, e2] = edge;
    if (!(e1 in graph)) graph[e1] = new Set();
    if (!(e2 in graph)) graph[e2] = new Set();
    graph[e1].add(e2);
    graph[e2].add(e1);
  }

  return graph;
};

// * Count How Many Connected Components There Are
// Time O(n) Space O(n)
const connectedComponentsCount = (graph) => {
  // todo
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};

// ! Recursive DFS
const explore = (graph, curr, visited) => {
  if (visited.has(curr.toString())) return false;
  visited.add(curr.toString());

  for (const node of graph[curr]) {
    explore(graph, node, visited);
  }
  return true;
};

// * Largest Component in a Graph
// Time O(n) Space O(n)
const largestComponent = (graph) => {
  // todo
  let largest = 0;

  for (let node in graph) {
    let size = explore(graph, node, new Set());
    largest = Math.max(size, largest);
  }

  return largest;
};

const explore = (graph, curr, visited) => {
  if (visited.has(curr)) return 0;

  visited.add(curr);

  let size = 1;

  for (const neighbors of graph[curr]) {
    size += explore(graph, neighbors, visited);
  }

  return size;
};

const shortestPath = (edges, nodeA, nodeB) => {
  let graph = createAdj(edges),
    visited = new Set([nodeA, 0]),
    queue = [[nodeA, 0]];

  while (queue.length) {
    let [curr, distance] = queue.shift();

    if (curr === nodeB) return distance;

    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]); //ask why distance++ doesnt work
      }
    }
  }

  return -1;
};

// * Island Count 
const islandCount = (grid) => {
  // todo
  let count = 0;
  let visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited) === true) count++;
    }
  }

  return count;
};

// ! Recursive DFS
const explore = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;
  if (grid[row][col] === "W") return false;

  let pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, row + 1, col, visited);
  explore(grid, row - 1, col, visited);
  explore(grid, row, col + 1, visited);
  explore(grid, row, col - 1, visited);

  return true;
};

const minimumIsland = (grid) => {
  let visited = new Set(),
    minimum = Infinity;
  // todo
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = explore(grid, row, col, visited);
      if (size > 0 && size < minimum) minimum = size;
    }
  }
  return minimum;
};

// * Closest Carrot BFS
// Time O(n) Space O(n)
const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const [queue, visited] = [[[startRow, startCol, 0]], new Set()];

  while (queue.length) {
    let [currRow, currCol, distance] = queue.pop();

    if (grid[currRow][currCol] === "C") return distance;

    let moves = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const move of moves) {
      let [dirX, dirY] = move;
      let rowChange = currRow + dirX,
        colChange = currCol + dirY;

      let pos = rowChange + "," + colChange;

      const rowInBounds = 0 <= rowChange && rowChange < grid.length;
      const colInBounds = 0 <= colChange && colChange < grid[0].length;
      if (
        rowInBounds &&
        colInBounds &&
        !visited.has(pos) &&
        grid[rowChange][colChange] !== "X"
      ) {
        visited.add(pos);
        queue.unshift([rowChange, colChange, distance + 1]);
      }
    }
  }
  return -1;
};

// * Longest Path in Graph
// Time O(e) Space O(n)
const longestPath = (graph) => {
  // todo
  const distance = {};

  for (const node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (const node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxLength = 0;
  for (const neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxLength) maxLength = attempt;
  }

  distance[node] = 1 + maxLength;
  return distance[node];
};

// * Semesters Required DFS
// Time O(p) Space O(c)
const semestersRequired = (numCourses, prereqs) => {
  // todo
  const graph = buildGraph(numCourses, prereqs);
  const distance = {};

  for (let course in graph) {
    if (graph[course].length === 0) {
      distance[course] = 1;
    }
  }

  for (let course in graph) {
    traverseDistance(graph, course, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let maxDistance = 0;

  for (let neighbor of graph[node]) {
    let neighborDistance = traverseDistance(graph, neighbor, distance);
    if (neighborDistance > maxDistance) maxDistance = neighborDistance;
  }

  distance[node] = 1 + maxDistance;
  return distance[node];
};

// ! Create adj list for a directed acyclic graph
const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
};

// * Best Bridge
// Time O(rc) Space O(rc)
const bestBridge = (grid) => {
  // todo
  let mainIsland;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let potentialIsland = traverseIsland(grid, row, col, new Set());
      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
        break;
      }
    }
  }

  const visited = new Set(mainIsland);
  const queue = [];

  for (let pos of mainIsland) {
    let [row, col] = pos.split(",").map(Number);
    queue.push([row, col, 0]);
  }

  while (queue.length) {
    let [row, col, distance] = queue.pop();
    const pos = row + "," + col;
    if (grid[row][col] === "L" && !mainIsland.has(pos)) return distance - 1;

    let moves = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let move of moves) {
      const [rowDelta, colDelta] = move;
      const [rowChange, colChange] = [row + rowDelta, col + colDelta];
      const movePos = rowChange + "," + colChange;
      if (isInBounds(grid, rowChange, colChange) && !visited.has(movePos)) {
        visited.add(movePos);
        queue.unshift([rowChange, colChange, distance + 1]);
      }
    }
  }
};

// ! Recursive DFS
const traverseIsland = (grid, row, col, visited) => {
  if (!isInBounds(grid, row, col) || grid[row][col] === "W") return visited;

  const pos = row + "," + col;
  if (visited.has(pos)) return visited;
  visited.add(pos);

  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row, col + 1, visited);
  traverseIsland(grid, row, col - 1, visited);

  return visited;
};

const isInBounds = (grid, row, col) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  return rowInBounds && colInBounds;
};

// * Detect Cycle
// ! Recursive with visiting and visited set
const hasCycle = (graph) => {
  // todo
  let visited = new Set(),
    visiting = new Set();

  for (let node in graph) {
    if (detectCycle(graph, node, visiting, visited) === true) {
      return true;
    }
  }
  return false;
};

const detectCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visiting, visited) === true) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

// * Iterative Has Cycle
const hasCycle = (graph) => {
  // todo
  let [queue, visited] = [Object.keys(graph), new Set()];

  while (queue.length) {
    let curr = queue.shift();
    if (graph[curr].length > 0) visited.add(curr);

    for (const neighbor of graph[curr]) {
      if (visited.has(neighbor)) return true;
    }
  }

  return false;
};

// * Prereqs Possible
// Time O(n) Space O(n)
const prereqsPossible = (numCourses, prereqs) => {
  // todo
  const [visited, visiting] = [new Set(), new Set()];
  const graph = createGraph(numCourses, prereqs);
  for (node in graph) {
    if (hasCycle(graph, node, visiting, visited)) {
      return false;
    }
  }
  return true;
};

const hasCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (const neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const createGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (const prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
};


// * Knight Attacks BFS
// Time O(n^2) Space O(n^2)
const knightAttack = (n, kr, kc, pr, pc) => {
  // todo
  const visited = new Set();
  visited.add(kr + "," + kc);
  const queue = [[kr, kc, 0]];

  while (queue.length) {
    const [r, c, step] = queue.shift();
    if (r === pr && c === pc) return step;
    const neighbors = getKnightMoves(n, r, c);
    for (let neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor;
      const neighborPos = neighborRow + "," + neighborCol;
      if (!visited.has(neighborPos)) {
        queue.push([neighborRow, neighborCol, step + 1]);
        visited.add(neighborPos);
      }
    }
  }
  return null;
};

const getKnightMoves = (n, r, c) => {
  const positions = [
    [r + 2, c + 1],
    [r - 2, c + 1],
    [r + 2, c - 1],
    [r - 2, c - 1],
    [r + 1, c + 2],
    [r - 1, c + 2],
    [r + 1, c - 2],
    [r - 1, c - 2],
  ];

  const inboundsPos = [];
  for (let pos of positions) {
    const [newRow, newCol] = pos;
    if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {
      inboundsPos.push(pos);
    }
  }

  return inboundsPos;
};
