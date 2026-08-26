const { sum } = require("./index");

test("adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(sum(-1, 1)).toBe(0);
});
