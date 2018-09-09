// @flow
const set: Set<string> = new Set(['{}', '()', '[]', '<>']);

const isAdmissibleChar = (str: string, coll: Set<string>) => {
  const reduced = Array.from(coll).reduce(
    (acc, value) => [...acc, `${value}`[0], `${value}`[1]],
    [],
  );
  return Array.from(str).every((item: string) => reduced.includes(item));
};

const isBracketStructureBalanced = (str: string): boolean => {
  if (str.length === 0) {
    return true;
  }

  if (isAdmissibleChar(str, set) && set.has(`${str[0]}${str[1]}`)) {
    return isBracketStructureBalanced(str.slice(2));
  }

  if (isAdmissibleChar(str, set) && set.has(`${str[0]}${str[str.length - 1]}`)) {
    return isBracketStructureBalanced(str.slice(1, str.length - 1));
  }

  return false;
};

export default isBracketStructureBalanced;
