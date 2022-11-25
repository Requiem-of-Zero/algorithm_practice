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

// Remove Nth node from the end of linked list
// O(n) time O(n) space by generating a new linked list
var removeNthFromEnd = function (head, n) {
  const sentinel = new ListNode();

  sentinel.next = head;

  const fast = moveFast(sentinel, n);
  const slow = moveSlow(sentinel, fast);

  slow.next = slow.next.next || null;

  return sentinel.next;
};

const moveFast = (fast, n) => {
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }

  return fast;
};

const moveSlow = (slow, fast) => {
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

// O(n) time O(1) space by resetting pointer in place solution
var removeNthFromEnd = function (head, n) {
  const length = getNthFromEnd(head, n);

  const isHead = length < 0;
  if (isHead) return head.next;

  const curr = moveNode(head, length);

  curr.next = curr.next.next;

  return head;
};

const getNthFromEnd = (curr, n, length = 0) => {
  while (curr) {
    curr = curr.next;
    length++;
  }

  return length - n - 1;
};

const moveNode = (curr, length) => {
  while (length) {
    curr = curr.next;
    length--;
  }

  return curr;
};
