
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