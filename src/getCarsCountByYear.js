// @flow
type initialObj = { [key: string]: number };
type resultantObj = { [key: number]: number };

export default (cars: Array<initialObj>) => {
  const iter = (items: Array<initialObj>, acc: resultantObj) => {
    if (items.length === 0) {
      return acc;
    }
    const [{ year }, ...rest] = items;
    const newValue = acc[year] ? acc[year] + 1 : 1;
    return iter(rest, { ...acc, [year]: newValue });
  };

  return iter(cars, {});
};
