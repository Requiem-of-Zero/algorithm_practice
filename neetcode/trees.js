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