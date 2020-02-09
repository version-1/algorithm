/* implement an alogrithm to determine if a string has all unique characters.
 * What you cannot use additional data structures
 */

const isUnique = str => {
  for (var i = 0; i < str.length; i++) {
    const compare = str.slice(0, i);
    if (compare.includes(str[i])) {
      return false;
    }
  }
  return true;
};

/* Given two strings, write a method to decide if one is a permutation of the other
 */

const isPermutation = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length - 1; i++) {
    const index = b.indexOf(a[i]);
    if (index > -1) {
      b = b.slice(0, index) + b.slice(index + 1, b.length);
    } else {
      return false;
    }
  }
  return true;
};

const urlify = (str, trueLength) => {
  acc = '';
  for (var i = 0; i <= trueLength - 1; i++) {
    if (i + 1 > str.length) {
      return acc;
    }

    if (str[i] === ' ') {
      acc = acc + '%20';
    } else {
      acc = acc + str[i];
    }
  }

  return acc;
};

module.exports = {
  isUnique,
  isPermutation,
  urlify,
};
