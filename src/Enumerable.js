class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn, direction = 'asc') {
    const compare = (a, b) => {
      const first = fn(a);
      const second = fn(b);
      if (first > second) {
        return direction === 'asc' ? 1 : -1;
      }
      if (first < second) {
        return direction === 'asc' ? -1 : 1;
      }
      return 0;
    };

    this.collection.sort(compare);
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
