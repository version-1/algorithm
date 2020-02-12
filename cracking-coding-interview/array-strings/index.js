/* implement an alogrithm to determine if a string has all unique characters.
 * What you cannot use additional data structures
 */

const isUnique = str => {
  for (var i = 0 i < str.length i++) {
    const compare = str.slice(0, i)
    if (compare.includes(str[i])) {
      return false
    }
  }
  return true
}

/* Given two strings, write a method to decide if one is a permutation of the other
 */

const isPermutation = (a, b) => {
  if (a.length !== b.length) {
    return false
  }
  for (var i = 0 i < a.length - 1 i++) {
    const index = b.indexOf(a[i])
    if (index > -1) {
      b = b.slice(0, index) + b.slice(index + 1, b.length)
    } else {
      return false
    }
  }
  return true
}

const urlify = (str, trueLength) => {
  let acc = ''
  for (var i = 0 i <= trueLength - 1 i++) {
    if (i + 1 > str.length) {
      return acc
    }

    if (str[i] === ' ') {
      acc = acc + '%20'
    } else {
      acc = acc + str[i]
    }
  }

  return acc
}

const isPalindromePermutation = str => {
  let maps = {}
  let acc = ''
  let oddCount = 0
  let spaceCount = 0
  for (var i = 0 i <= str.length - 1 i++) {
    const char = str[i].toLowerCase()
    if (char !== ' ') {
      if (maps[char]) {
        maps[char]++
        if (maps[char] % 2 === 0) {
          oddCount--
        } else {
          oddCount++
        }
      } else {
        maps[char] = 1
        oddCount++
      }
    } else {
      spaceCount++
    }
  }
  const isEven = (str.length - spaceCount) % 2 === 0
  if (isEven) {
    return oddCount <= 0
  } else {
    return oddCount === 1
  }
}

const oneAway = (a, b) => {
  let acc = a
  for (var i = 0 i <= b.length - 1 i++) {
    const index = acc.indexOf(b[i])
    if (index > -1) {
      acc = acc.slice(0, index) + acc.slice(index + 1, acc.length)
    }
  }

  return acc.length <= 1
}

const compression = str => {
  let compression = []
  let acc = ''
  for (var i = 0 i <= str.length - 1 i++) {
    const char = str[i]
    if (compression[0]) {
      if (char === compression[0]) {
        compression[1]++
      } else {
        acc = acc + compression[0] + compression[1]
        compression[0] = char
        compression[1] = 1
      }
    } else {
      compression[0] = char
      compression[1] = 1
    }
  }
  acc = acc + compression[0] + compression[1]
  return acc.length < str.length ? acc : str
}

module.exports = {
  isUnique,
  isPermutation,
  urlify,
  isPalindromePermutation,
  oneAway,
  compression,
}
