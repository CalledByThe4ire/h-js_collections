// @flow
export default (
  words: Array<string>,
  stopwords: Array<string>,
): Map<K, V> => {
  const normalizeCase = (list: Array<string>): Array<string> =>
    list.map(item => item.toLowerCase());

  const removeKeys = (
    list: Array<string>,
    keys: Array<string>,
  ): Array<string> => {
    let filtered = list;

    for (const key of keys) {
      filtered = filtered.filter(item => item !== key);
    }
    return filtered;
  };

  const countWordEntries = (list: Array<string>): Map<K, V> => {
    const entriesList: Map<K, V> = new Map();

    for (const key of list) {
      if (!entriesList.has(key)) {
        entriesList.set(key, list.filter(element => element === key).length);
      }
    }

    return entriesList;
  };

  const filteredWordslist: Array<string> = removeKeys(
    normalizeCase(words),
    normalizeCase(stopwords),
  );
  return countWordEntries(filteredWordslist);
};
