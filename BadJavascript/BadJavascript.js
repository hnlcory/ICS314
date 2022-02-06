/**
 * How many violations of the AirBnb Javascript Style guide can we pack into one file?
 * Created by Philip Johnson on 8/4/16.
 */

// const foo = 3;
const car = 'Toyota';
const obj = {
  car,
  foo: 3,
  bar: `this is ${this.car}`,
  baz: 'bz',
};
const zumba = obj.car;
const stuff = [];

function f() {}

function zob(param) {
  param = 2;
  const foob = 4 + param;
  if (param === 4) {
    return foob;
  }
  return null;
}
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});
class MyClass {
  getName() {
    return this.name;
  }
}
const TheTitle = 'The Title';

// export names so that there aren't a bunch of spurious "defined but not used" errors (except the first one!)
export default {
  obj, stuff, zumba, f, zob, MyClass, TheTitle,
};
