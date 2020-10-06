/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    return parseInt(('0'.repeat(32 - n.toString(2).length) + n.toString(2)).split('').reverse().join(''), 2)
};