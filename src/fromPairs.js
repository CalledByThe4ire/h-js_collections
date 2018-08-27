// @flow
type Obj = { [key: string]: number };
type tuple = [string, number];

export default (list: Array<tuple>) => {
  const obj: Obj = {};
  list.forEach((item: tuple) => {
    const [key, value] = item;
    obj[key] = value;
  });
  return obj;
};
