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
});
