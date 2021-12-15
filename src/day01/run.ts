import { readFileSync } from 'fs';

let puzzleInput = readFileSync(__dirname + '/../../data/day01/input.txt', 'utf-8').split("\n").map(measurement => parseInt(measurement));

export function countDepthIncreases(depths: number[]): number {
  let count = 0

  depths.forEach((depth, index) => {
    depth < depths[index + 1] ? count += 1 : count
  })

  return count
}

console.log(countDepthIncreases(puzzleInput))
