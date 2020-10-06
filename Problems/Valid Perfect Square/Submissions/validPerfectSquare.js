/**
 * @param {number} num
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

var isPerfectSquare = function(num) {
    for(let i = 1; i <= sqrt(num); i++) {
        if(i*i === num) return true;
    }
    
    return false;
};