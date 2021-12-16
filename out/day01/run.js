"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDepthIncreases = void 0;
const fs_1 = require("fs");
let puzzleInput = (0, fs_1.readFileSync)(__dirname + '/../../data/day01/input.txt', 'utf-8').split("\n").map(measurement => parseInt(measurement));
function countDepthIncreases(depths, measurementWindow = 1) {
    let count = 0;
    depths.forEach((depth, index) => {
        depth < depths[index + measurementWindow] ? count += 1 : count;
    });
    return count;
}
exports.countDepthIncreases = countDepthIncreases;
console.log(countDepthIncreases(puzzleInput));
console.log(countDepthIncreases(puzzleInput, 3));
