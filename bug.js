function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // Output: true
console.log(foo(15, 27)); // Output: false
console.log(foo(10, 0)); // Uncaught RangeError: Maximum call stack size exceeded