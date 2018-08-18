// @flow
export default (set1: Set<T>, set2: Set<T>): Set<T> =>
  new Set(Array.from(set1).filter((value: mixed) => !set2.has(value)));
