// @flow
export default (array: Array<mixed>, ...rest: Array<mixed>): Array<mixed> => {
  const set = new Set(rest);
  return array.filter(value => !set.has(value));
};
