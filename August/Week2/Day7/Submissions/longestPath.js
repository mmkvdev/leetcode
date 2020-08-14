/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
    let m = new Map();
    for (i = 0; i < s.length; i++) {
        if (m.has(s[i])) m.delete(s[i]);
        else m.set(s[i], 1);
    }

    let nOdds = m.size;
    return nOdds ? s.length - nOdds + 1 : s.length;
};