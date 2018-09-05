// @flow
export default (arr: Array<number>): number | null => {
  for (const value of arr) {
    const filtered = arr.filter(item => item === value);
    if (filtered.length % 2 !== 0) {
      return value;
    }
  }
  return null;
};

