import Enumerable from '../src/Enumerable';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = new Enumerable(cars);
  });

  it('select', () => {
    const result = coll.select(car => car.model);
    expect(result.toArray()).toEqual(['m5', 'm4', 'sorento', 'rio', 'sportage']);
  });

  it('orderBy', () => {
    const result = coll.orderBy(car => car.year).select(car => car.year);
    expect(result.toArray()).toEqual([2010, 2012, 2013, 2014, 2014]);
  });

  it('where', () => {
    const result = coll.where(car => car.year === 2014).select(car => car.brand);
    expect(result.toArray()).toEqual(['bmw', 'kia']);
  });

  it('should be immutable', () => {
    coll.orderBy(car => car.year, 'asc').toArray();
    const result = coll.where(car => car.brand === 'kia')
      .where(car => car.year > 2011).select(car => car.model);

    expect(result.toArray()).toEqual(['sorento', 'sportage']);
  });
});
