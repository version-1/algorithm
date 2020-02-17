
const List = ({data, next = null} = {}) => ({
  data,
  next,
});

const fromArray = array => {
  if (array.lenght <= 0) {
    return null;
  }
  const list = List();
  let cursor = list;
  array.forEach((item, index) => {
    cursor.data = item;
    if (index < array.length - 1) {
      const n = List();
      cursor.next = n;
      cursor = n;
    }
  });
  return list;
};

const toArray = list => {
  if (!list) {
    return [];
  }
  let array = [];
  let cursor = list;
  while (cursor.next) {
    array.push(cursor.data);
    cursor = cursor.next;
  }
  array.push(cursor.data);
  return array;
};

module.exports = {
  List,
  fromArray,
  toArray
};
