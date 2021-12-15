"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDepthIncreases = void 0;
function countDepthIncreases(depth1, depth2) {
    if (depth1 < depth2) {
        return 1;
    }
    else {
        return 0;
    }
}
exports.countDepthIncreases = countDepthIncreases;
