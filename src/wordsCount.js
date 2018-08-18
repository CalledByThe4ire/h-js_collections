// @flow
export default (words: Array<string>, stopWords: Array<string>): Map<K, V> =>
  words
    .map((word: string) => word.toLowerCase())
    .filter((word: string) => !stopWords.includes(word))
    .reduce((acc: Map<K, V>, word: string) => {
      if (!acc.has(word)) {
        return acc.set(word, 1);
      }
      return acc.set(word, acc.get(word) + 1);
    }, new Map());
