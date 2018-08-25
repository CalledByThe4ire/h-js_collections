// @flow
type Obj = {[key: string]: mixed}
type objCollection = {[key: string]: Obj};

export default (list: Array<Obj>, fn: (item: Obj) => mixed): objCollection =>
  list.reduce((acc: objCollection, item: Obj) =>
    ({ ...acc, [fn(item)]: item }), {});
