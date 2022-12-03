// Invert Binary Tree LeetCode #266
  // O(n) time O(1) space *recursive*
var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Maximum Depth in Tree LeetCode #104
  // O(n) time O(1) space *recursive*
var maxDepth = function (root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};

// Same Tree LeetCode #100
  // O(n) time O(1) space *recursive*
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// isSubtree of Another Tree 
  // O(n) time O(1) space *recursive*
var isSubtree = function (root, subRoot) {
  if (isMatch(root, subRoot)) return true;
  if (!root) return false;
  let leftSub = isSubtree(root.left, subRoot),
    rightSub = isSubtree(root.right, subRoot);
  return leftSub || rightSub;
};

const isMatch = function (r1, r2) {
  if (r1 != null && r2 == null) return false;
  if (r1 == null && r2 != null) return false;
  if (r1 == null && r2 == null) return true;

  return (
    r1.val == r2.val && isMatch(r1.left, r2.left) && isMatch(r1.right, r2.right)
  );
};

// Lowest Common Ancestor
  // O(logn) time for height of tree O(1) space
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;

  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }
};

// Level Order Traversal
  // O(n) time for amount of nodes in tree O(k) space for the amount of node in the levels of the tree
var levelOrder = function (root) {
  if (!root) return [];
  return bfs([root]);
};

const bfs = (queue, levels = []) => {
  while (queue.length) {
    const level = [];
    for (let i = queue.length - 1; 0 <= i; i--) {
      const currNode = queue.shift();
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
      level.push(currNode.val);
    }
    levels.push(level.slice());
  }
  return levels;
};

// Validate Binary Search Tree
var isValidBST = function (root) {
  if (!root) return true;
  let leftValid = isValidBST(root.left),
    rightValid = isValidBST(root.right);
  //     from root move left keep going right until the end
  //      -variable: firstPoint : boolean
  //         the val has to be less than the root val
  let firstPoint = validateFirst(root.left, root.val);
  //
  //     from root move right keep going left until the end
  //      -variable: secondPoint : boolean
  //         the val has to be greater than the root val
  let secondPoint = validateSecond(root.right, root.val);
  return leftValid && rightValid && firstPoint && secondPoint;
};

const validateFirst = (leftNode, currVal) => {
  if (!leftNode) return true;

  while (leftNode.right) {
    leftNode = leftNode.right;
  }

  return leftNode.val < currVal;
};

const validateSecond = (rightNode, currVal) => {
  if (!rightNode) return true;

  while (rightNode.left) {
    rightNode = rightNode.left;
  }

  return rightNode.val > currVal;
};

// Neetcode solution
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  const isBaseCase = root === null;
  if (isBaseCase) return true;

  const isInvalid = root.val <= min || max <= root.val;
  if (isInvalid) return false;
  
  const dfs = (root, min, max) => {
    const left = isValidBST(root.left, min, root.val);
    const right = isValidBST(root.right, root.val, max);
  
    return left && right;
  };
  
  return dfs(root, min, max);
};


// Kth Smallest Element in a BST
  // O(n) time O(n) space 
var kthSmallest = function (root, k, inOrder = []) {
  if (!root) return inOrder;
  return dfs(root, k, inOrder);
};

const dfs = (root, k, inOrder) => {
  if (root.left) kthSmallest(root.left, k, inOrder);
  inOrder.push(root.val);
  if (root.right) kthSmallest(root.right, k, inOrder);
  return inOrder[k - 1];
};