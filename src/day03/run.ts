import { readFileSync } from 'fs';

const puzzleInput = readFileSync(__dirname + "/../../data/day03/input.txt", "utf-8").split("\n");

export function calculatePowerConsumption(diagnosticReport: string[]): number {
  let gammaRateBinary = ""
  let epsilonRateBinary = ""
  let bits: string[][] = []

  diagnosticReport.forEach(reportElement => {
    let elementArray = [...reportElement]
    elementArray.forEach((bit, index) => {
      (!bits[index]) && bits.push([])
      bits[index].push(bit)
    })
  })

  const sortedBits = bits.map(bitArray => {
    return bitArray.sort()
  })

  sortedBits.forEach(sortedBitsArray => {
    const halfPointIndex = Math.floor(sortedBitsArray.length / 2)
    
    if (sortedBitsArray[halfPointIndex] == "0") {
      gammaRateBinary += "0"
      epsilonRateBinary += "1"
    } else if (sortedBitsArray[halfPointIndex] == "1") {
      gammaRateBinary += "1"
      epsilonRateBinary += "0"
    }
  })

  const gammaRateDecimal = parseInt(gammaRateBinary, 2)
  const epsilonRateDecimal = parseInt(epsilonRateBinary, 2)
  const powerConsumption = gammaRateDecimal * epsilonRateDecimal

  return powerConsumption
}

console.log(calculatePowerConsumption(puzzleInput));
