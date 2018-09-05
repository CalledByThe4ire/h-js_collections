// @flow
export default (arr: Array<number>, num: number): number => {
  if (arr.length === 0) {
    return null;
  }
  return arr.reduce(
    (currIndex: number, e: number, i: number) =>
      Math.abs(e - num) < Math.abs(arr[currIndex] - num) ? i : currIndex,
    0,
  );
};
