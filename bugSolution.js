function foo(a, b) {
  if (b === 0) {
    return a;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(15, 27)); // Output: 3
console.log(foo(10, 0)); // Output: 10