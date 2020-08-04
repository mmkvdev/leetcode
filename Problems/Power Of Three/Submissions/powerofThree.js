/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
    if(n < 0) return false;
    return 1162261467 % n == 0;
};