// @flow
export default (list: Array<string[]>): Array<string[]> =>
  list.reduce((acc, value, idx) => {
    const doubled = [];
    value.forEach(item => doubled.push(...item, ...item));
    const resultingList = [...acc, (acc[idx] = doubled), (acc[idx + 1] = doubled)];
    return resultingList;
  }, []);
