const brackets = new Map([['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']]);

const isOpeningSymbol = symbol => brackets.has(symbol);

const getClosingSymbolFor = symbol => brackets.get(symbol);

const isStackEmpty = stack => stack.length === 0;

export default str => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      if (isStackEmpty(stack)) {
        return false;
      }

      const last = stack.pop();

      if (symbol !== last) {
        return false;
      }
    }
  }

  return isStackEmpty(stack);
};
