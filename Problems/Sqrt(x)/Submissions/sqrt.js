/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let res = x;
    let y = 1;
    let e = 0.000001
    while((res - y) > e) {
        res = (res + y)/2;
        y = x/res;
    }
    return Math.floor(res);
};