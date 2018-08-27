// @flow
export default (array1: Array<mixed>, array2: Array<mixed>): Array<mixed> => {
  const filtered: Array<mixed> = array1.filter(value => array2.includes(value));
  return [...new Set(filtered)];
};
