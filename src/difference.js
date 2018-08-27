/* eslint-disable no-confusing-arrow */
// @flow
export default (list1: Array<mixed>, list2: Array<mixed>): Array<mixed> =>
  list1.reduce(
    (acc: Array<mixed>, item: mixed, idx: number) =>
      item === list2[idx] ? acc : [...acc, item],
    [],
  );
