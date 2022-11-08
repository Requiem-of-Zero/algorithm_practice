// Recursive reverse list

var reverseList = function (head, prev = null) {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

// Iterative reverse list

var reverseList = function (head, prev = null) {
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
