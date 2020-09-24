/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let k = '';
    let sOrder = s.split('').sort();
    let tOrder = t.split('').sort();
    for (let i = 0; i < tOrder.length; i++) {
        if (tOrder[i] !== sOrder[i]) {
            return tOrder[i];
        }
    }
};
