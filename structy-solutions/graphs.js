
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


