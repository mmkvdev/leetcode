/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map((v) => Math.pow(v, 2)).sort((a, b) => a - b);
};
