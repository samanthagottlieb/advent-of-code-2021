"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDepthIncreases = void 0;
function countDepthIncreases(depths) {
    let count = 0;
    depths.forEach((depth, index) => {
        depth < depths[index + 1] ? count += 1 : count;
    });
    return count;
}
exports.countDepthIncreases = countDepthIncreases;
