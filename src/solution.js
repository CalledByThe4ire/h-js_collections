export default str => str
  .split('')
  .map((e, i, arr) => {
    if (e === '|') {
      return e;
    }
    return i === 0 || e === arr[i - 1] ? 0 : 1;
  })
  .filter(e => e !== '|')
  .join('');
