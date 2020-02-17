/* 2.1 Write code to remove duplicates from an unsorted linked list.
 *
 */
const uniq = list => {
  const map = {};
  let cursor = list;
  let previous = null;
  while (cursor) {
    if (map[cursor.data]) {
      previous.next = cursor.next;
    } else {
      map[cursor.data] = true;
      previous = cursor;
    }
    cursor = cursor.next;
  }
  return list;
};

/* 2.1 Write code to remove duplicates from an unsorted linked list.
 * How would you solve this problem if a temporary buffer is not allowed
 *
 */
const uniqWithoutBuffer = list => {
  let cursor = list;
  while (cursor) {
    let runner = cursor;
    let isDuplicate = false;
    while (runner.next) {
      if (runner.next.data === cursor.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    cursor = cursor.next;
  }
  return list;
};

/* 2.2 Implement an algorithm to find the kth to last element of a singly linked list
 *
 */
const findIndexFromEnd = ({ head, k }) => {
  let p1 = head;
  let p2 = head;

  for (let i = 0; i < k; i++) {
    if (!p1) return null;
    p1 = p1.next;
  }

  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
};

module.exports = {
  uniq,
  uniqWithoutBuffer,
  findIndexFromEnd
};
