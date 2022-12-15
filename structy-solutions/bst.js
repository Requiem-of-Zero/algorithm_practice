// * Depth First Values
// ! recursive
const depthFirstValuesRecursive = (root) => {
  if (!root) return [];
  let leftValues = depthFirstValues(root.left);
  let rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
    // ! iterative
const depthFirstValues = (root) => {
  if (!root) return [];
  const values = [],
    stack = [root];
  while (stack.length) {
    const curr = stack.pop();
    values.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return values;
};

// * Breadth First Values
const breadthFirstValues = (root) => {
  if (!root) return [];

  const queue = [root],
    result = [];

  while (queue.length) {
    let currNode = queue.pop();

    result.push(currNode.val);

    if (currNode.left) queue.unshift(currNode.left);
    if (currNode.right) queue.unshift(currNode.right);
  }

  return result;
};

// * Tree Sum
const treeSum = (root) => {
  // todo
  if (!root) return 0;

  const stack = [root];
  let result = 0;

  while (stack.length) {
    let currNode = stack.pop();

    result += currNode.val;

    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }

  return result;
};

// * Tree Includes
const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;

  const stack = [root];

  while (stack.length) {
    let curr = stack.pop();

    if (curr.val === target) return true;

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return false;
};

// ! Recursive tree includes
// const treeIncludes = (root, target) => {

//   if (!root) return false;
//   if (root.val === target) return true;
//   let left = treeIncludes(root.left, target),
//     right = treeIncludes(root.right, target);
//   return left || right;
// };

// * Max Path Sum
const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  let left = maxPathSum(root.left),
    right = maxPathSum(root.right);
  return root.val + Math.max(left, right);
};

// * Tree Min Value
const treeMinValue = (root) => {
  // todo
  const stack = [root];

  let min = Infinity;

  while (stack.length) {
    let curr = stack.pop();

    min = Math.min(curr.val, min);

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return min;
};

// * Tree Path Finder
  // Time O(n^2) space O(n)
const pathFinder = (root, target) => {
  if(!root) return null
  if(root.val === target) return [target];
  if(!root.left && !root.right) return null;
  const left = pathFinder(root.left, target),
        right = pathFinder(root.right, target);
  if(left !== null){
    left.unshift(root.val);
    return left
  }
  if(right !== null){
    right.unshift(root.val);
    return right;
  }
  return null
};

// * Tree Value Count Iterative
// Time O(n) Space O(n)
const treeValueCount = (root, target) => {
  // todo
  if (!root) return 0;
  let [count, stack] = [0, [root]];

  while (stack.length) {
    let currNode = stack.pop();
    if (currNode.val === target) count++;
    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
  }

  return count;
};

/*
 ! Recursive
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  return (
    match +
    treeValueCount(root.left, target) +
    treeValueCount(root.right, target)
  );
};
*/ 

// * How High
// ! Recursive
// Time O(n) Space O(n)
const howHigh = (node) => {
  // todo
  if (!node) return -1;
  const left = howHigh(node.left),
    right = howHigh(node.right);
  return 1 + Math.max(left, right);
};

// * Bottom Right Value
// Time O(n) Space O(n)
const bottomRightValue = (root) => {
  // todo
  const queue = [root];
  let lastEle;

  while (queue.length) {
    let curr = queue.shift();
    lastEle = curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return lastEle;
};

// * All Tree Paths in 2D Matrix
// ! Recursive
// Time O(n) Space O(n)
const allTreePaths = (root) => {
  // todo
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const paths = [];

  const left = allTreePaths(root.left),
    right = allTreePaths(root.right);

  for (let subPath of left) {
    paths.push([root.val, ...subPath]);
  }

  for (let subPath of right) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};

// * Tree Levels
// Time O(n) Space O(n)
const treeLevels = (root) => {
  // todo
  if (!root) return [];
  let [queue, levels, length] = [[root], [], 1];

  while (queue.length) {
    let level = [];
    length = queue.length;
    for (let i = 0; i < length; i++) {
      let currNode = queue.pop();
      level.push(currNode.val);
      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }
    levels.push(level);
  }

  return levels;
};

// * Level Averages BFS
// Time O(n) Space O(n) 
const levelAverages = (root) => {
  // todo
  if (!root) return [];
  let [queue, sum, averages, length] = [[root], 0, [], 1];

  while (queue.length) {
    length = queue.length;
    for (let i = 0; i < length; i++) {
      let currNode = queue.pop();
      sum += currNode.val;
      if (currNode.left) queue.unshift(currNode.left);
      if (currNode.right) queue.unshift(currNode.right);
    }
    averages.push(sum / length);
    sum = 0;
  }

  return averages;
};