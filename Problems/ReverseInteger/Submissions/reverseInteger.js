/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverseSum = 0;
    var flag = false;
    if (x < 0) {
        flag = true;
        x = -x;
    }
    while (x) {
        reverseSum = reverseSum * 10 + (x % 10);
        x = parseInt(x / 10);
    }
    if (reverseSum < Math.pow(2, -31) || reverseSum > Math.pow(2, 31)) return 0;
    if (flag === true) return -reverseSum;
    return reverseSum;
};