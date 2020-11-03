/**
 * @param {string} s
 * @return {number}
 */

var maxPower = function (s) {
    let res = 0;
    let i = 0;
    while (i < s.length) {
        let count = 1;
        while (s[i] === s[i + 1]) {
            i++;
            count++;
        }
        res = Math.max(res, count);
        i++;
    }
    return res;
};
