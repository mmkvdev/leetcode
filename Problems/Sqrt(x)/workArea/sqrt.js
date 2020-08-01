/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // console.log(Math.sqrt(x))
    // return Math.floor(Math.sqrt(x))
    
    let res = x;
    let y = 1;
    let e = 0.000001
    
    // console.log(res-y)
    while((res - y) > e) {
    	// console.log('approximation: ', res-y)
    	// console.log('Im here')
        res = (res + y)/2;
        // console.log('res value: ', res)
        y = x/res;
        // console.log('y value: ',y);
    }
    
    return Math.floor(res);
};

// console.log(mySqrt(4))
// console.log(mySqrt(2))
// console.log(mySqrt(12))
// console.log(mySqrt(8))
console.log(mySqrt(1440))
// console.log(mySqrt(16))
// mySqrt(12)