### Enumerable.js

#### Select

Реализуйте метод `select`, который отображает (принцип работы как у функции `map`) коллекцию, другими словами, извлекает из элементов коллекции нужные данные и возвращает объект с новой (отображенной) коллекцией из этих данных.

```
const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

// [car] => [model]
const result = coll.select(car => car.model);

assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);

```

#### OrderBy

Реализуйте метод `orderBy`, который сортирует коллекцию на основе переданных данных.

Принимаемые параметры:

1.  Функция, возвращающая значение, по которому будет происходить сортировка.
2.  Направление сортировки: `asc` - по возрастанию, `desc` - по убыванию (по умолчанию - `asc`).

```
const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

const result = coll.orderBy(car => car.year, 'desc')
  .where(car => car.brand === 'bmw')
  .select(car => car.model);

assert.deepEqual(result.toArray(), ['m5', 'm4']);

```

#### Подсказки

Для выполнения сортировки воспользуйтесь встроенной функцией: `sort`.<https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>