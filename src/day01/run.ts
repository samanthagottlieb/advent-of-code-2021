import { readFileSync } from 'fs';

let puzzleInput = readFileSync(__dirname + '/../../data/day01/input.txt', 'utf-8').split("\n").map(measurement => parseInt(measurement));

export function countDepthIncreases(depths: number[], measurementWindow = 1): number {
  let count = 0

  depths.forEach((depth, index) => {
    depth < depths[index + measurementWindow] ? count += 1 : count
  })

  return count
}

console.log(countDepthIncreases(puzzleInput))
console.log(countDepthIncreases(puzzleInput, 3))
