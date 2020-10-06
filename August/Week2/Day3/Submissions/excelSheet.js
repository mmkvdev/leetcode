/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let res = 0, exp = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        res += (26 ** exp) * (s[i].charCodeAt() % 64);
        exp++;
    }

    return res;
};