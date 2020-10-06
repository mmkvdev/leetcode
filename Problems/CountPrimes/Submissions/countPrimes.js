/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primeCounter = new Array(n).fill(true);
    primeCounter[0] = false;
    primeCounter[1] = false;
    for (let i=2;i*i<n;i++) {
        if (primeCounter[i]) {
            for(let j=i*i;j<n;j+=i){ // p*(p+1)...
                primeCounter[j] = false;
            }
        }
    }
    return primeCounter.filter((val)=>val).length;
};