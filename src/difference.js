/* eslint-disable no-confusing-arrow */
// @flow
export default (array1: Array<mixed>, array2: Array<mixed>): Array<mixed> => {
  const set = new Set(array2);
  return array1.filter(value => !set.has(value));
};
