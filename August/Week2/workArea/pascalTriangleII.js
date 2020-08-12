/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    /* naive approach
    let res = Array(rowIndex+1).fill(0);
    // res.fill(0, 0, rowIndex+1);
    res[0]=1;
    // console.log(res);
    
    // res[0]=1;
    for(let i = 1; i<=rowIndex; i++) {
        for(let j = i; j > 0; j--) {
            res[j] = res[j]+res[j-1];
        }
    }
    
    // console.log(res);
    return res;*/
    
    // combinatorics approach
    
    let res = Array(rowIndex+1).fill(0);
    
    res[0]=1;
    
    for(let i=1; i<=rowIndex; i++) {
        res[i] = res[i-1]*parseInt(rowIndex - (i-1))/(i);
        // console.log(parseInt(rowIndex-(i-1)/(i)))
    }
    // console.log(res);
    return res;
    
};