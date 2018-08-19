class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const mapped = this.collection.map(fn);
    return new Enumerable(mapped);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const comparator = (a, b) => {
      const first = fn(a);
      const second = fn(b);
      const compareResult = direction === 'asc' ? 1 : -1;

      if (first > second) {
        return compareResult;
      }

      if (first < second) {
        return -compareResult;
      }

      return 0;
    };

    const sorted = this.collection.slice().sort(comparator);
    return new Enumerable(sorted);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
