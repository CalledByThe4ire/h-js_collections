import { eachDay, format } from 'date-fns';

// BEGIN (write your solution here)
export default (data, begin, end) => {
  const [bY, bM, bD] = begin.split('-');
  const [eY, eM, eD] = end.split('-');
  const dateRange = eachDay(new Date(bY, bM, bD), new Date(eY, eM, eD)).map(
    date => ({
      value: 0,
      date: `${format(
        new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()),
        'DD.MM.YYYY'
      )}`
    })
  );
  data.forEach(input => {
    dateRange.forEach(output => {
      if (input.date === output.date) {
        output.value = input.value;
      }
    });
  });
  return dateRange;
};
// END
