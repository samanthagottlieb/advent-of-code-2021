export function countDepthIncreases(depths: number[]): number {
  let count = 0
  
  depths.forEach((depth, index) => {
    depth < depths[index + 1] ? count += 1 : count
  })

  return count
}
