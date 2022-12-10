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