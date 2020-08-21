/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    // filters approach
    let even = A.filter((i) => i % 2 === 0);
    let odd = A.filter((i) => i % 2 !== 0);

    return [...even, ...odd];
    // return [even,odd]
};
