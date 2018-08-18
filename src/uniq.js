// @flow
export default (coll: Array<mixed>): Array<mixed> =>
  coll.reduce(
    (acc: Array<mixed>, value: mixed): Array<mixed> =>
      acc.includes(value) ? acc : acc.concat(value),
    [],
  );

