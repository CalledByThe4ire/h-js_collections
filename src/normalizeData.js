import { keyBy, get } from 'lodash';
import { eachDay, format } from 'date-fns';

// BEGIN (write your solution here)
export default (data, begin, end) => {
  const dates = keyBy(data, 'date');
  const result = eachDay(begin, end)
    .map(day => format(day, 'DD.MM.YYYY'))
    .map(date => get(dates, date, { date, value: 0 }));
  return result;
};
// END
