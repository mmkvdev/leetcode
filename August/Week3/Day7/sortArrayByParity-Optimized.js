/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    // Optimized Approach
    for (i = 0, j = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            j++;
        }
    }
    return A;
};
