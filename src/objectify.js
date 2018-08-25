// @flow
type Obj = {[key: string]: mixed}
type objCollection = {[key: string]: Obj};

export default (coll: Array<Obj>, select: (item: Obj) => mixed) =>
  coll.reduce((acc: objCollection, item: Obj) => ({ ...acc, [select(item)]: item }), {});
