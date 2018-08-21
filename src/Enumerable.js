class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  where(...args) {
    return this.build((coll) => {
      return args.reduce((acc, value) => {
        if (typeof value === 'function') {
          return acc.filter(value);
        }

        if (typeof value === 'object') {
          return Object.entries(value).reduce((accumulator, item) => {
            const key = item[0];
            const val = item[1];
            const func = element => element[key] === val;
            return accumulator.filter(func);
          }, acc);
        }
      }, coll);
    });
  }

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce(
        (acc, func) => func(acc),
        this.collection,
      );
    }

    return this.memo;
  }
}

export default Enumerable;
