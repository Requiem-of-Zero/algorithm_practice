var evauluateTree = function(root) { 
  if(!root) return false;
  if(!root.left && !root.right) return root.val;
  let left = evauluateTree(root.left),
      right = evauluateTree(root.right);
  if(root.val===2){
    return left || right
  }else if(root.val === 3){
    return left && right
  }
}

var maxDepth = function(root) {
  if(!root) return 0;
  let maxChildDepth = 0;
  for(const child of root.children){
    let childDepth = maxDepth(child);
    if(childDepth > maxChildDepth) maxChildDepth = childDepth;
  }

  return 1 + maxChildDepth;
}

var searchBST = function(root, val) {
  if(!root) return null;
  if(root.val === val) return root;
  if(val < root.val) {
    return searchBST(root.left, val)
  } else {
    return searchBST(root.right, val)
  }
}