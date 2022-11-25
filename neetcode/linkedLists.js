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

// Reorder List 1 -> 2 -> 3 -> 4 to 1 -> 4 -> 2 -> 3

var reorderList = function (head) {
  const mid = getMid(head);
  const reverseListFromMid = reverseList(mid);

  reorder(head, reverseListFromMid);
};

  // Helpers
const getMid = (head) => {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverseList = (head) => {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

const reorder = (list1, list2) => {
  let [first, next, second] = [list1, null, list2];

  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};

