// depth first values
    // recursive
const depthFirstValuesRecursive = (root) => {
  if (!root) return [];
  let leftValues = depthFirstValues(root.left);
  let rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
    // iterative
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

// breadth first values
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
