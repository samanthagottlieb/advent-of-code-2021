"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePositionProductWithAim = exports.calculatePositionProduct = void 0;
const fs_1 = require("fs");
const puzzleInput = (0, fs_1.readFileSync)(__dirname + "/../../data/day02/input.txt", "utf-8").split("\n");
function calculatePositionProduct(course) {
    let horizontalPosition = 0;
    let depth = 0;
    const courseSplit = course.map(direction => direction.split(" "));
    courseSplit.forEach(direction => {
        if (direction[0] == "forward") {
            horizontalPosition += parseInt(direction[1]);
        }
        else if (direction[0] == "down") {
            depth += parseInt(direction[1]);
        }
        else if (direction[0] == "up") {
            depth -= parseInt(direction[1]);
        }
    });
    return horizontalPosition * depth;
}
exports.calculatePositionProduct = calculatePositionProduct;
function calculatePositionProductWithAim(course) {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    const courseSplit = course.map(direction => direction.split(" "));
    courseSplit.forEach(direction => {
        if (direction[0] == "forward") {
            horizontalPosition += parseInt(direction[1]);
            depth += aim * parseInt(direction[1]);
        }
        else if (direction[0] == "down") {
            aim += parseInt(direction[1]);
        }
        else if (direction[0] == "up") {
            aim -= parseInt(direction[1]);
        }
    });
    return horizontalPosition * depth;
}
exports.calculatePositionProductWithAim = calculatePositionProductWithAim;
console.log(calculatePositionProduct(puzzleInput));
console.log(calculatePositionProductWithAim(puzzleInput));
