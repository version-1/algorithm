const removeDuplicateList = list => {
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

module.exports = {
  removeDuplicateList,
};
