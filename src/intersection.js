// @flow
export default (list1: Array<mixed>, list2: Array<mixed>): Array<mixed> => {
  const filteredList1: Array<mixed> = Array.from(new Set(list1));
  const filteredList2: Array<mixed> = Array.from(new Set(list2));
  return filteredList1.filter(item => filteredList2.includes(item));
};
