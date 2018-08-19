class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  orderBy(fn, direction = "asc") {
    const comparator = (a, b) => {
      const first = fn(a);
      const second = fn(b);
      const compareResult = direction === "asc" ? 1 : -1;

      if (first > second) {
        return compareResult;
      }

      if (first < second) {
        return -compareResult;
      }

      return 0;
    };

    const newOps = this.operations.slice();
    newOps.push(coll => coll.sort(comparator));
    return new Enumerable(this.collection.slice(), newOps);
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }
  // на каждом этапе из this.operation достаётся очередная функция,
  // которая обрабатывает аккумулятор. Таким образом, из этапа в этап,
  // происходит последовательная обработка массива с данными.
  toArray() {
    return this.operations.reduce((acc, op) => op(acc), this.collection);
  }
  // END
}

export default Enumerable;
