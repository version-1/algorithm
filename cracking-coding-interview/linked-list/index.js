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

module.exports = {
  uniq,
  uniqWithoutBuffer,
};
