function createIterator(array) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // true
