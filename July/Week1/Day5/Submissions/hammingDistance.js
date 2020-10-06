/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const hamingCounter = (n) => {
    let i=0;
    while(n) {
        i++;
        n &= n-1;
    }
    return i;
}
var hammingDistance = function(x, y) {
    return hamingCounter(x^y);
};