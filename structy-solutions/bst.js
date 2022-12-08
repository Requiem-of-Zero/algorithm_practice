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