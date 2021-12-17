import { calculatePowerConsumption } from "../../src/day03/run";

describe("calculate the product of the gamma rate and epsilon rate to give the power consumption", () => {
  it("should return 198 when the diagnostic report is 00100, 11110, 10110", () => {
    expect(calculatePowerConsumption(["00100", "11110", "10110"])).toBe(198);
  });

  it("should return 2068 when the diagnostic report consists of three 12 bit binary numbers of 011111101011", () => {
    expect(calculatePowerConsumption(["011111101011", "011111101011", "011111101011"])).toBe(4191836);
  });
});
