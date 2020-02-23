const M = require('./index.js');
const L = require('./helper.js');

describe('linked-list', () => {
  test('uniq', () => {
    const dup = L.fromArray([1, 3, 5, 7, 7, 2]);
    const dup2 = L.fromArray([7, 3, 5, 7, 7, 2]);
    const dup3 = L.fromArray([1, 1, 1]);
    const dup4 = L.fromArray([1, 2, 1, 2]);
    const nodup = L.fromArray([1, 3, 5, 7, 2]);
    const nodup2 = L.fromArray([1]);
    const testCase = [
      [dup, [1, 3, 5, 7, 2]],
      [dup2, [7, 3, 5, 2]],
      [dup3, [1]],
      [dup4, [1, 2]],
      [nodup, [1, 3, 5, 7, 2]],
      [nodup2, [1]],
    ];
    testCase.map(([input, expectation], index) => {
      const list = M.uniq(input);
      expect(L.toArray(list)).toEqual(expectation);
    });
  });

  test('uniqWithoutBuffer', () => {
    const dup = L.fromArray([1, 3, 5, 7, 7, 2]);
    const dup2 = L.fromArray([7, 3, 5, 7, 7, 2]);
    const dup3 = L.fromArray([1, 1, 1]);
    const dup4 = L.fromArray([1, 2, 1, 2]);
    const nodup = L.fromArray([1, 3, 5, 7, 2]);
    const nodup2 = L.fromArray([1]);
    const testCase = [
      [dup, [1, 3, 5, 7, 2]],
      [dup2, [7, 3, 5, 2]],
      [dup3, [1]],
      [dup4, [1, 2]],
      [nodup, [1, 3, 5, 7, 2]],
      [nodup2, [1]],
    ];
    testCase.map(([input, expectation], index) => {
      const list = M.uniqWithoutBuffer(input);
      expect(L.toArray(list)).toEqual(expectation);
    });
  });

  test('findIndexFromEnd', () => {
    const head = L.fromArray([1, 2, 3, 4, 5, 6]);
    const testCase = [
      [{head, k: 1}, 6],
      [{head, k: 3}, 4],
      [{head, k: 6}, 1],
    ];
    testCase.map(([input, expectation], index) => {
      const node = M.findIndexFromEnd(input);
      expect(node.data).toEqual(expectation);
    });
  });

  test('removeMiddle', () => {
    const testCase = [
      [L.fromArray([1, 2, 3, 4, 5, 6]), [1, 2, 4, 5, 6]],
      [L.fromArray([1, 2, 5, 7, 9]), [1, 2, 7, 9]],
      [L.fromArray([1, 2]), [2]],
      [L.fromArray([1]), [1]],
    ];
    testCase.map(([input, expectation], index) => {
      M.removeMiddle(input);
      expect(L.toArray(input)).toEqual(expectation);
    });
  });
  test('partition', () => {
    const testCase = [
      [
        {node: L.fromArray([3, 5, 8, 5, 10, 2, 1]), x: 5},
        [1, 2, 3, 5, 8, 5, 10],
      ],
    ];
    testCase.map(([input, expectation], index) => {
      const node = M.partition(input);
      expect(L.toArray(node)).toEqual(expectation);
    });
  });

  test('sumList', () => {
    const testCase = [
      [
        [L.fromArray([7, 1, 6]), L.fromArray([5, 9, 2])],
        [2, 1, 9],
      ],
    ];
    testCase.map(([input, expectation], index) => {
      const node = M.sumList(input[0], input[1]);
      expect(L.toArray(node)).toEqual(expectation);
    });
  });

  test('isPalindrome', () => {
    const testCase = [
      [L.fromArray('anna'.split('')), true],
      [L.fromArray('tattarrattat'.split('')), true],
      [L.fromArray('work'.split('')), false],
    ];
    testCase.map(([input, expectation], index) => {
      const res = M.isPalindrome(input);
      expect(res).toEqual(expectation);
    });
  });
});
