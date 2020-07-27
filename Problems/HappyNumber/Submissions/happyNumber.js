/**
 * @param {number} n
 * @return {boolean}
 */
var checkHappy = (n) => {
    let sum = 0;
    while (n) {
        sum += Math.pow(n % 10, 2);
        n = parseInt(n / 10);
    }
    return sum;
}
var isHappy = function (n) {
    let happyTracker = checkHappy(n), arr = [];
    while (!arr.includes(happyTracker)) {
        if (happyTracker === 1) return true;
        arr.push(happyTracker);
        happyTracker = checkHappy(happyTracker);
    }
    return false;
};