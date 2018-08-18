// @flow
export default (set1: Set<T>, set2: Set<T>): Set<T> => {
  const result: Set<T> = new Set();
  set1.forEach((value: mixed) => {
    if (!set2.has(value)) {
      result.add(value);
    }
  });
  return result;
};
