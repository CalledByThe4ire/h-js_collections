// @flow
export default (arr: Array<any>, n: number): Array<Array<any>> => {
  if (n === 0 || typeof n === 'undefined') {
    return arr;
  }

  if (arr.length !== 0 && arr.length <= n) {
    const resultingArray: Array<Array<any>> = [];
    resultingArray[0] = arr;
    return resultingArray;
  }

  let counter: number = 0;
  let len: number = 0;
  const chunksQuantity: number =
    n % 2 === 0 ? Math.floor(arr.length / n) : Math.floor(arr.length / n) + 1;
  const resultingArray: Array<Array<any>> = [];

  while (counter < chunksQuantity) {
    resultingArray[counter] = [...arr.slice(len, len + n)];
    counter += 1;
    len += n;
  }
  return resultingArray;
};
