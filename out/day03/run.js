"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePowerConsumption = void 0;
const fs_1 = require("fs");
const puzzleInput = (0, fs_1.readFileSync)(__dirname + "/../../data/day03/input.txt", "utf-8").split("\n");
function calculatePowerConsumption(diagnosticReport) {
    let gammaRateBinary = "";
    let epsilonRateBinary = "";
    let bits = [];
    for (let x = 0; x < 12; x++) {
        bits.push([]);
    }
    diagnosticReport.forEach(reportElement => {
        let elementArray = [...reportElement];
        elementArray.forEach((bit, index) => {
            bits[index].push(bit);
        });
    });
    const sortedBits = bits.map(bitArray => {
        return bitArray.sort();
    });
    sortedBits.forEach(sortedBitsArray => {
        const halfPointIndex = Math.floor(sortedBitsArray.length / 2);
        if (sortedBitsArray[halfPointIndex] == "0") {
            gammaRateBinary += "0";
            epsilonRateBinary += "1";
        }
        else if (sortedBitsArray[halfPointIndex] == "1") {
            gammaRateBinary += "1";
            epsilonRateBinary += "0";
        }
    });
    const gammaRateDecimal = parseInt(gammaRateBinary, 2);
    const epsilonRateDecimal = parseInt(epsilonRateBinary, 2);
    const powerConsumption = gammaRateDecimal * epsilonRateDecimal;
    return powerConsumption;
}
exports.calculatePowerConsumption = calculatePowerConsumption;
console.log(calculatePowerConsumption(puzzleInput));
