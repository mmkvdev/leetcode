/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    // Naive Approach
    let res = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            res.push(A[i]);
            // A.splice(i,i+1);
            // console.log(A);
        }
        // console.log(A);
        // else res.push(A[i]);
    }
    // console.log(res)
    // console.log(A);
    for (let j = 0; j < A.length; j++) {
        if (A[j] % 2 !== 0) res.push(A[j]);
    }
    //console.log(res);

    return res;
};
