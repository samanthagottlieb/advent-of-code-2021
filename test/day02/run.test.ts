import { calculatePositionProduct, calculatePositionProductWithAim } from "../../src/day02/run";

describe("calculate the product of the horizontal position and depth you would have after following the planned course", () => {
  it("should return 6 when the course is horizontal 2, down 3", () => {
    expect(calculatePositionProduct(["forward 2", "down 3"])).toBe(6);
  });

  it("should return 5 when the course is horizontal 2, down 3, up 1", () => {
    expect(calculatePositionProduct(["forward 2", "down 3", "up 1"])).toBe(4);
  });
});

describe("calculate the product of the horizontal position and depth after following the planned course considering aim", () => {
  it("should return 30 when the course is forward 2, down 3, up 1, forward 3", () => {
    expect(calculatePositionProductWithAim(["forward 2", "down 3", "up 1", "forward 3"])).toBe(30);
  })
});
