/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function pow(x, n) {
    if (n == 0) {
        return 1.0;
    }
    const half = pow(x, parseInt(n / 2));
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}

var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return pow(x, n);
};