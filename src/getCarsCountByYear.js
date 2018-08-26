/* eslint-disable no-confusing-arrow, no-return-assign, no-param-reassign */

// @flow
type initialObj = {[key: string]: number};
type resultantObj = {[key: number]: number}

const getItemsCountByPropertyName = (list: Array<initialObj>, propName: string) => {
  const mapped: Array<mixed> = list.map(item => item[propName]);

  const iter = (items: Array<initialObj>, acc: resultantObj) => {
    if (items.length === 0) {
      return acc;
    }

    const key: initialObj = items[0];
    const value = list.reduce((accumulator: number, val: initialObj): number =>
      val[propName] === key ? (accumulator += 1) : accumulator, 0);

    return iter([...items.slice(1)], { ...acc, [key]: value });
  };
  return iter(mapped, {});
};

export default (list: Array<initialObj>) => getItemsCountByPropertyName(list, 'year');
