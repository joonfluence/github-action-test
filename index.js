function fibonacci(n) {
  if (n < 0) {
    throw new Error("Fibonacci is only defined for non-negative integers!");
  }

  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

module.exports = fibonacci;
