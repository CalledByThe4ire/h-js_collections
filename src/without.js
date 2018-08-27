// @flow
export default (list: Array<mixed>, ...rest: Array<mixed>): Array<mixed> => {
  const filteredList: Array<mixed> = Array.from(new Set(list));
  const filteredRest: Array<mixed> = Array.from(new Set(rest));

  return filteredRest.reduce((acc: Array<mixed>, item: mixed) => {
    if (acc.includes(item)) {
      const filtered = acc.filter((element: mixed) => element !== item);
      return [...filtered];
    }
    return acc;
  }, filteredList);
};
