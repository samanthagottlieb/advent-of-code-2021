import { calculatePositionProduct } from "../../src/day02/run";

describe("calculate the product of the horizontal position and depth you would have after following the planned course", () => {
  it("should return 6 when the course is horizontal 2, down 3", () => {
    expect(calculatePositionProduct(["forward 2", "down 3"])).toBe(6);
  });
});
