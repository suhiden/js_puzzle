// var fibonacci = function (n) {
//   var first = 0;
//   var second = 1;
//   var temp = 0;

//   while (n > 0) {
//     n--;
//     temp = second;
//     second += first;
//     first = temp;
//     console.log(first);
//   }

//   return first;
// };

//=====================================     2 way
// var fibonacci = (function () {
//   var memo = {};
//   return function (n) {
//     if (memo[n]) {
//       return memo[n];
//     }
//     return (memo[n] = n <= 1 ? n : fibonacci(n - 2) + fibonacci(n - 1));
//   };
// })();

//======================================      3 way
var memo = function (f) {
  var cache = {};
  return function (n) {
    if (!cache[n]) cache[n] = f(n);
    return cache[n];
  };
};
var fibonacci = memo(function (n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

let n = 1000;
console.log("fibonachi для числа:", n, ", равно: ", fibonacci(n));
