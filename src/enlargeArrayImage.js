// @flow
import _ from 'lodash';

const duplicateEachItemInArray = arr =>
  _.flatten(arr.map(item => [item, item]));

const enlargeArrayImage = (arr: Array<string[]>): Array<string[]> => {
  const horizontallyStretched = arr.map(duplicateEachItemInArray);
  return duplicateEachItemInArray(horizontallyStretched);
};

export default enlargeArrayImage;
