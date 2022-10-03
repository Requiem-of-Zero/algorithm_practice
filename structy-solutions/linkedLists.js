// linked list values
const linkedListValues = (head) => {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  return values;
};

// sum list
const sumList = (head) => {
  let sum = 0,
    current = head;

  while (current) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};

// linked list find
const linkedListFind = (head, target) => {
  let current = head;

  while (current) {
    if (current.val === target) return true;
    current = current.next;
  }

  return false;
};

// get node value
const getNodeValue = (head, index) => {
  let current = head;

  for (let i = 0; i < index; i++) {
    if (current.next === null) return null;
    current = current.next;
  }

  return current.val;
};

// reverse list
    // recursive
const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseListRecursive(next, head);
};
    // iterative
const reverseList = (head) => {
  let current = head,
    prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// zipper lists
const zipperLists = (head1, head2) => {
  let head = head1,
    tail = head,
    curr1 = head1.next,
    curr2 = head2,
    count = 0;

  while (curr1 && curr2) {
    if (count % 2) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
    count++;
  }

  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;

  return head;
};

// merge lists
const mergeLists = (head1, head2) => {
  let returnHead = new Node(),
    tail = returnHead,
    curr1 = head1,
    curr2 = head2;

  while (curr1 && curr2) {
    if (curr1.val > curr2.val) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
  }

  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;

  return returnHead.next;
};

// is univalue list
const isUnivalueList = (head) => {
  const valSet = new Set();
  let current = head;

  while (current) {
    valSet.add(current.val);
    current = current.next;
  }

  return valSet.size === 1;
};

// longest streak
const longestStreak = (head) => {
  let current = head,
    maxStreak = 0,
    currStreak = 1,
    prev = null;
  while (current) {
    if (current.val !== prev) {
      currStreak = 1;
    } else {
      currStreak++;
    }

    if (currStreak > maxStreak) maxStreak = currStreak;

    prev = current.val;
    current = current.next;
  }
  return maxStreak;
};

// remove node
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  let current = head,
    prev = null;

  while (current) {
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }
  return head;
};

// insert node
const insertNode = (head, value, index) => {
  let insertNode = new Node(value),
    current = head,
    idxCount = 1;

  if (index === 0) {
    insertNode.next = head;
    return insertNode;
  }

  while (current) {
    if (idxCount === index) {
      let next = current.next;
      current.next = insertNode;
      current.next.next = next;
    }
    current = current.next;
    idxCount++;
  }
  return head;
};

// add lists
    // recursive
const addListsRecursive = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;
  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const resultNode = new Node(digit);
  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;

  resultNode.next = addLists(next1, next2, nextCarry);
  return resultNode;
};
// iterative
const addLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let carry = 0,
    curr1 = head1,
    curr2 = head2,
    tail = dummyHead;

  while (curr1 || curr2 || carry === 1) {
    const val1 = curr1 === null ? 0 : curr1.val;
    const val2 = curr2 === null ? 0 : curr2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    if (curr1 !== null) curr1 = curr1.next;
    if (curr2 !== null) curr2 = curr2.next;
    tail.next = new Node(digit);
    tail = tail.next;
  }
  return dummyHead.next;
};