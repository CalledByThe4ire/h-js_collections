// @flow
const findIndexOfNearest = (arr: Array<number>, n: number): number => {
  if (arr.length === 0) {
    return null;
  }

  const diff = arr.reduce((acc, value) => [...acc, Math.abs(value - n)], []);
  return diff.findIndex(value => value === Math.min(...diff));
};

export default findIndexOfNearest;
