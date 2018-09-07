// @flow
export default (coll: Array<any>, size: number): Array<Array<any>> => {
  const iter = (iterColl: Array<any>, acc: Array<Array<any>> = []) => {
    if (iterColl.length === 0) {
      return acc;
    }
    return iter(iterColl.slice(size), [...acc, iterColl.slice(0, size)]);
  };

  return iter(coll);
};
