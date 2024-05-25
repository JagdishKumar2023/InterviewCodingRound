//simple add function

function add(x, y, z) {
  return x + y + z;
}

console.log(add(1, 4, 5));

function curridAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const result = curridAdd(1)(2)(3);
console.log(result);

function Multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

let res = Multiply(2)(1)(4);
console.log(res);
