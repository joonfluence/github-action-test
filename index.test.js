const fibonacci = require("./index");

describe("fibonacci function", () => {
  it("correctly computes factorial of a positive integer number", () => {
    expect(fibonacci(10)).toEqual(55);
  });

  it("throws an error if a negative", () => {
    expect(() => {
      fibonacci(-1);
    }).toThrow("Fibonacci is only defined for non-negative integers!");
  });
});
