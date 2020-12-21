/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
    const B = [];

    for (let i = 0; i < A.length; i++) {
        let x = K,
            flag_pos = 0,
            flag_neg = 0;
        if (A[i] <= K && flag_pos === 0) {
            A[i] = A[i] + K;
            flag_pos = 1;
        } else if (A[i] > K && flag_neg === 0) {
            A[i] = A[i] - K;
            flag_neg = 1;
        }
    }

    console.log(A);
    return Math.max(...A) - Math.min(...A);
};
