// @flow
export default (arr: Array<mixed>): Array<mixed> => {
  const iter = (items: Array<mixed>, acc: Array<mixed>): Array<mixed> => {
    const copy: Array<mixed> = items.slice();

    if (copy.length === 0) {
      return acc;
    }

    const head: mixed = copy.shift();
    const filteredTail: Array<mixed> = copy.filter(item => item !== head);

    return iter(filteredTail, acc.concat(head));
  };
  return iter(arr, []);
};
