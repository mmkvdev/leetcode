/**
 * @param {number} n
 * @return {boolean}
 */

/*var checkPower = (a,b) => {
    return Math.log(a) / Math.log(b);
}*/

/*var sqrt = (n) => {
    let res = n, y = 1, e = 0.000001;
    while((res-y) > e) {
        res = (n+y)/2;
        y = n/res;
    }
    
    return res;
}*/

var isPowerOfThree = function(n) {
    /*for(let i = 0; i<sqrt(n);i++){
        if(3**i === n ) return true;
    }
    
    return false;*/
    //return (n != 0 && ((n && (n - 1)) == 0) && !(n && 0xAAAAAAAA)); 
    if(n < 0) return false;
    return 1162261467 % n == 0
};