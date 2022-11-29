// Invert Binary Tree LeetCode #266
  // O(n) time O(1) space
var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};


