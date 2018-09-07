// @flow
export default (str: string): string => {
  if (str.length === 1 && str === '|') {
    return '';
  }

  const filtered: Array<string> = str.split('').filter(item => item !== '|');
  let symbol: string = filtered[0];
  const mapped: Array<number> = filtered.map((item) => {
    if (item === symbol) {
      return 0;
    }
    symbol = item;
    return 1;
  });
  return str[0] === '|' ? [1, ...mapped.slice(1)].join('') : mapped.join('');
};

