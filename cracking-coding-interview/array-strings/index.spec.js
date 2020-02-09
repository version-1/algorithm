const M = require('./index.js');

test('isUnique', () => {
  const testCase = [
    ['banana', false],
    ['apple', false],
    ['park', true],
    ['', true],
  ];
  testCase.map(([input, expectation]) => {
    expect(M.isUnique(input)).toEqual(expectation);
  });
});

test('isPermutation', () => {
  const testCase = [
    [['banana', 'nanaba'], true],
    [['apple', 'banana'], false],
    [['park', 'parkpark'], false],
    [['', ''], true],
  ];
  testCase.map(([input, expectation]) => {
    expect(M.isPermutation(input[0], input[1])).toEqual(expectation);
  });
});

test('urlify', () => {
  const testCase = [
    [['Mr John Smith    ', 13], 'Mr%20John%20Smith'],
    [['   ', 2], '%20%20'],
    [['', 3], ''],
    [['a b', 4], 'a%20b']
  ];
  testCase.map(([input, expectation]) => {
    expect(M.urlify(input[0], input[1])).toEqual(expectation);
  });
});

test('isPalindromePermutation', () => {
  const testCase = [
    ['Tact Coa', true],
    ['Tact Coe', false],
    ['workkrow', true],
    ['work   krow', true],
    ['t', true],
    ['   ', true],
    ['', true]
  ];
  testCase.map(([input, expectation]) => {
    expect(M.isPalindromePermutation(input)).toEqual(expectation);
  });
});
