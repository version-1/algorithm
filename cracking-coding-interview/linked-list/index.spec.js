const M = require('./index.js');

const LinkedList = ({data, next = null} = {}) => ({
  data,
  next,
});

const linkedListFactory = array => {
  if (array.lenght <= 0) {
    return null;
  }
  const list = LinkedList();
  let cursor = list;
  array.forEach((item, index) => {
    cursor.data = item;
    if (index < array.length - 1) {
      const n = LinkedList();
      cursor.next = n;
      cursor = n;
    }
  });
  return list;
};

const extractLinkedList = list => {
  if(!list) {
    return []
  }
  let array = [];
  let cursor = list;
  while (cursor.next) {
    array.push(cursor.data);
    cursor = cursor.next
  }
  array.push(cursor.data);
  return array;
};

test('removeDuplicateList', () => {
  const dup = linkedListFactory([1, 3, 5, 7, 7, 2]);
  const dup2 = linkedListFactory([7, 3, 5, 7, 7, 2]);
  const dup3 = linkedListFactory([1, 1, 1]);
  const dup4 = linkedListFactory([1, 2, 1, 2]);
  const nodup = linkedListFactory([1, 3, 5, 7, 2]);
  const nodup2 = linkedListFactory([1]);
  const testCase = [
    [dup, [1, 3, 5, 7, 2]],
    [dup2, [7, 3, 5, 2]],
    [dup3, [1]],
    [dup4, [1, 2]],
    [nodup, [1, 3, 5, 7, 2]],
    [nodup2, [1]],
  ];
  testCase.map(([input, expectation], index) => {
    const list = M.removeDuplicateList(input);
    expect(extractLinkedList(list)).toEqual(expectation);
  });
});
