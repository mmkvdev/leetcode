/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = Array(rowIndex+1).fill(0);
    
    res[0]=1;
    
    for(let i=1; i<=rowIndex; i++) {
        res[i] = res[i-1]*parseInt(rowIndex - (i-1))/(i);
    }
    return res;
    
};