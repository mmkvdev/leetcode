/**
 * @param {number} c
 * @return {boolean}
 */
var sqrt = (c) => {
    let res = c;
    let y = 1;
    let e = 0.000001
    while((res - y) > e) {
        res = (res + y)/2;
        y = c/res;
    }
    return Math.floor(res);
}
var judgeSquareSum = function(c) {
    for(let i = 0; i<= sqrt(c); i++) {
        let b = c - i*i
        
        if( sqrt(b)*sqrt(b) === b) return true;
    }
    
    return false;
};