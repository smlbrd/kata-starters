import { describe, expect, it } from "vitest";
import { sum } from "./main";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("adds negative numbers", () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
