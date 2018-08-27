// @flow
type Obj = { [key: string]: number };
type tuple = [string, number];

export default (pairs: Array<tuple>): Obj =>
  pairs.reduce((acc, [key, value]) => ({ [key]: value, ...acc }), {});
