import { countDepthIncreases } from "../../src/day01/run";

describe("count the number of times a depth measurement increases", () => {
  it("should return 1 when the depth 199 is followed by 203)", () => {
    expect(countDepthIncreases([199, 203])).toBe(1);
  });

  it("should return 2 when the depth measurements are 199, 203, 204", () => {
    expect(countDepthIncreases([199, 203, 204])).toBe(2);
  })

  it("should return 1 when the depth measurements are 199, 203, 200", () => {
    expect(countDepthIncreases([199, 203, 200])).toBe(1);
  })
});

describe("count the number of times the sum of depths in a three-measurement sliding window increases", () => {
  it("should return 1 when the four measurements are 199, 200, 209, 210 ", () => {
    expect(countDepthIncreases([199, 200, 209, 210], 3)).toBe(1);
  })
});
