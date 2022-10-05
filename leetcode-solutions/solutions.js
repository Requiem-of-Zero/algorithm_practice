// Climb Stairs #70
var climbStairs = function (n) {
    // if there are less than 3 stairs, we can return the stair amount which is the same as the amount of ways
  if (n < 4) {
    return n;
  }
    //   
  var firstSum = 2;
  var secondSum = 3;

  for (var i = 4; i < n; i++) {
    secondSum = firstSum + secondSum;
    firstSum = secondSum - firstSum;
  }
  return firstSum + secondSum;
};

// Intersection of Two Linked Lists #160
var getIntersectionNode = function (headA, headB) {
  if (headA === null && headB === null) return null;

  let a_pointer = headA;
  let b_pointer = headB;

  while (a_pointer !== b_pointer) {
    if (a_pointer === null) {
      a_pointer = headB;
    } else {
      a_pointer = a_pointer.next;
    }

    if (b_pointer === null) {
      b_pointer = headA;
    } else {
      b_pointer = b_pointer.next;
    }
  }

  return a_pointer;
}; 

