import { countDepthIncreases } from "../src/day1";

describe("count the number of times a depth measurement increases", () => {
  it("should return 1 when the depth 199 is followed by 203)", () => {
    expect(countDepthIncreases(199, 203)).toBe(1);
  });
});
