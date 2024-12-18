function fibonacciSeries(n) {
  var fib = [0, 1];
    for (var i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib;
  }
console.log(fibonacciSeries(10)); 