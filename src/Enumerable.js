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

    const clone = this.collection.slice();
    clone.sort(comparator);
    return new Enumerable(clone);
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
