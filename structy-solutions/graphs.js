
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